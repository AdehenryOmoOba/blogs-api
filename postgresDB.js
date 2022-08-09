import poolPackage from "pg";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") dotenv.config();

const { Pool } = poolPackage;

export const blogsPool = new Pool({
  user: "postgres",
  password: process.env.PSQL_DB_PASSWORD,
  database: "youtube_clone_db",
  host: "127.0.0.1",
  port: 5432,
});
