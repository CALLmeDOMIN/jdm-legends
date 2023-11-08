import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL is not set");
}

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL,
  }
//   tablesFilter: ["jdm-legends_*"],
} satisfies Config;