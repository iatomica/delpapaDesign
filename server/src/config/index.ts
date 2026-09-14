import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  sessionSecret: process.env.SESSION_SECRET || 'delpapa-studio-session-key',
  publicBaseUrl: process.env.PUBLIC_BASE_URL || 'http://localhost:3000',
  isProduction: (process.env.NODE_ENV || 'development') === 'production',
};
