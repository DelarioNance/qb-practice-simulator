// You have to do an 'npm install mysql2' to get the package
// Documentation in: https://www.npmjs.com/package/mysql2
import dotenv from 'dotenv';
dotenv.config();
import { createConnection } from 'mysql2';
import fs from "fs"
import { fileURLToPath } from 'url';
import path, {dirname} from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbHost = process.env.CONNECTION_HOST_MYSQL
const dbUser = process.env.CONNECTION_USER_MYSQL
const dbPassword = process.env.CONNECTION_PASSWORD_MYSQL
const dbName = "dbQuizBowl"

var connection = createConnection({
	host: dbHost,
	user: dbUser,
	password: dbPassword,
	database: dbName
});

connection.connect();

export default connection