/**
 * This file acts as the entry point to the QB Practice Simulator 
 * application. When this file is ran, this file attemps to start the
 * application server.
 */

import express from 'express';
import favicon from 'serve-favicon';
import { fileURLToPath } from 'url';
import path, {dirname} from 'path';
import routes from "./backend/routes/routes.mjs";

// Used to get absolute file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize app
const app = express();
const PORT = 3001;

// Specify templating engine
app.set('view engine', 'ejs');

// Specify location of HTML template files
app.set('views', path.join(__dirname, "views"));

// Specify location of static files (e.g., CSS, JS, image, and static HTML files)
app.use(express.static(path.join(__dirname,  "frontend")));

// Specify route handling
app.use('/', routes);

// Specify favicon
app.use(favicon(path.join(__dirname,  "frontend", "images", "favicon_io", "favicon.ico")));

// Start server
app.listen(PORT, () => {
    console.log('Server is starting on port,', PORT)
})

process.on('exit', () => {
    console.log('Server is stopping')
})