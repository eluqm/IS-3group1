import dotenv from 'dotenv';
dotenv.config();

export default {
  MONGO_URI: process.env.MONGO_URI || 'undefined',
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  MONGO_PORT: process.env.MONGO_PORT || '27017',
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'waqya_db',
  MONGO_USER: process.env.MONGO_USER || 'admin',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
  SERVER_PORT: process.env.SERVER_PORT || 8000,
};