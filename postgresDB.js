import poolPackage from "pg";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") dotenv.config();

const { Pool } = poolPackage;

export const blogsPool = new Pool({
  user: "hgsmcqse",
  password: process.env.PSQL_DB_PASSWORD,
  database: "hgsmcqse",
  host: "manny.db.elephantsql.com",
  port: 5432,
});
