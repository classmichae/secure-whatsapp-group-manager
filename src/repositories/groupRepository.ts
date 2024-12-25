import { query } from '@/lib/db';

export interface Group {
  id: string;
  name: string;
  antilink_enabled: boolean;
  welcome_message: string;
  is_locked: boolean;
  created_at: Date;
}

export const groupRepository = {
  async getAllGroups(): Promise<Group[]> {
    const result = await query('SELECT * FROM groups ORDER BY created_at DESC');
    return result.rows;
  },

  async createGroup(name: string): Promise<Group> {
    const result = await query(
      'INSERT INTO groups (name) VALUES ($1) RETURNING *',
      [name]
    );
    return result.rows[0];
  },

  async updateGroup(id: string, data: Partial<Group>): Promise<Group> {
    const fields = Object.keys(data);
    const values = Object.values(data);
    const setClause = fields.map((field, index) => `${field} = $${index + 2}`).join(', ');
    
    const result = await query(
      `UPDATE groups SET ${setClause} WHERE id = $1 RETURNING *`,
      [id, ...values]
    );
    return result.rows[0];
  },

  async deleteGroup(id: string): Promise<void> {
    await query('DELETE FROM groups WHERE id = $1', [id]);
  }
};