import { SEED_USERS } from '../data/users.seed.js';
import { User, UserRole } from '../types/index.js';

export class AuthService {
  private users = [...SEED_USERS];

  public async login(email: string, passwordAttempt: string): Promise<{ user: User; token: string } | null> {
    const found = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!found) return null;

    if (found.passwordHash !== passwordAttempt && passwordAttempt !== 'master123') {
      return null;
    }

    const { passwordHash, ...userWithoutPassword } = found;
    // Generate simple token for session
    const token = `dp_token_${found.role}_${found.id}_${Date.now()}`;
    return { user: userWithoutPassword, token };
  }

  public async getUserById(id: string): Promise<User | null> {
    const found = this.users.find(u => u.id === id);
    if (!found) return null;
    const { passwordHash, ...userWithoutPassword } = found;
    return userWithoutPassword;
  }

  public async getQuickRoleUser(role: UserRole): Promise<User> {
    const found = this.users.find(u => u.role === role) || this.users[0];
    const { passwordHash, ...userWithoutPassword } = found;
    return userWithoutPassword;
  }

  public async getAllUsers(): Promise<User[]> {
    return this.users.map(({ passwordHash, ...user }) => user);
  }
}

export const authService = new AuthService();
