import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    PORT: process.env.PORT,
    DATA_BASE_URL:process.env.DATA_BASE_URL,
    NODE_NEW:process.env.NODE_NEW,
    JWT_ACCESS_TOKEN:process.env.JWT_ACCESS_TOKEN,
    JWT_ACCESS_TIME:process.env.JWT_ACCESS_TIME,
    JWT_REFRESS_TOKEN:process.env.JWT_REFRESS_TOKEN,
    JWT_REFRESS_TIME:process.env.JWT_REFRESS_TIME,
    BCRYPT_ROUND:process.env.BCRYPT_ROUND    
  };