import { query } from '@/lib/db';

export interface User {
  id: string;
  username: string;
  password_hash: string;
  is_super_admin: boolean;
  created_at: Date;
  isSuperAdmin: boolean; // Added to match AuthContext interface
}

export const userRepository = {
  async findByUsername(username: string): Promise<User | null> {
    const result = await query(
      'SELECT *, is_super_admin as "isSuperAdmin" FROM users WHERE username = $1',
      [username]
    );
    return result.rows[0] || null;
  },

  async createUser(username: string, passwordHash: string, isSuperAdmin: boolean = false): Promise<User> {
    const result = await query(
      'INSERT INTO users (username, password_hash, is_super_admin) VALUES ($1, $2, $3) RETURNING *, is_super_admin as "isSuperAdmin"',
      [username, passwordHash, isSuperAdmin]
    );
    return result.rows[0];
  },

  async validateCredentials(username: string, password: string): Promise<User | null> {
    // בהמשך נוסיף הצפנת סיסמאות, כרגע זה בדיקה פשוטה
    const result = await query(
      'SELECT *, is_super_admin as "isSuperAdmin" FROM users WHERE username = $1 AND password_hash = $2',
      [username, password]
    );
    return result.rows[0] || null;
  }
};