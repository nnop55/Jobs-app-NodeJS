import { config } from "dotenv";
import * as path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

function initializeConfig() {
  const envFile = path.resolve(dirname, ".env");
  config({ path: envFile });
}

initializeConfig();

export const dbParams = {
  username: process.env.DB_USERNAME,
  pass: process.env.DB_PASS,
};

export const JWTSecretKey = process.env.JWT_SECRET;
export const MailerPass = process.env.MAILER_PASS;
