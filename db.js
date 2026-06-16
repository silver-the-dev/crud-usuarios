import dotenv from 'dotenv'
import postgres from 'postgres'
dotenv.config();


export const sql = postgres(process.env.DATABASE_URL, {
  max: 10,
  idle_timeout: 20
});