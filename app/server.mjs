/**
 * This file acts as the entry point to the QB Practice Simulator 
 * application. When this file is ran, its main function starts up 
 * the application server.
 */

import express from 'express';
import { fileURLToPath } from 'url';
import path, {dirname} from 'path';
import routes from "./backend/routes/routes.mjs";

// Used to get absolute file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize app
const app = express();
const PORT = 3001;

function main() {
    // Specify templating engine
    app.set('view engine', 'ejs');

    // Specify location of HTML template files
    app.set('views', path.join(__dirname, "views"));

    // Specify location of static files (e.g., CSS, JS, image, and static HTML files)
    app.use(express.static(path.join(__dirname,  "frontend")));

    // Specify route handling
    app.use('/', routes);

    // Start server
    app.listen(PORT, () => {
        console.log('Server is starting on port,', PORT)
    })

    process.on('exit', () => {
        console.log('Server is stopping')
    })
}

main();