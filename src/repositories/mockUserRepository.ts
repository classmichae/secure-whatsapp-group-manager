export interface User {
  id: string;
  username: string;
  isSuperAdmin: boolean;
}

const SUPER_ADMIN_USERNAME = import.meta.env.VITE_SUPER_ADMIN_USERNAME || 'admin';
const SUPER_ADMIN_PASSWORD = import.meta.env.VITE_SUPER_ADMIN_PASSWORD || 'admin123';

export const userRepository = {
  async validateCredentials(username: string, password: string): Promise<User | null> {
    // For development, only check against super admin credentials
    if (username === SUPER_ADMIN_USERNAME && password === SUPER_ADMIN_PASSWORD) {
      return {
        id: '1',
        username: SUPER_ADMIN_USERNAME,
        isSuperAdmin: true
      };
    }
    return null;
  }
};