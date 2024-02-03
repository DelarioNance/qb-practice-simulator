// Import modules
import express from 'express';
import { fileURLToPath } from 'url';
import path, {dirname} from 'path';

// Import routes
import routes from './routes/routes.mjs';

// Create app
var app = express();

// Set app variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../views')); // Set the directory where your views (templates) are stored

// Use middleware
app.use(express.static(path.join(__dirname,  "../frontend/")))

// Use routes
app.use('/', routes)

// Define port
let port = 3001

// Start up server
app.listen(port, () => {
  console.log('Server is starting on PORT,', port)
})

process.on('exit', () => {
  console.log('Server is stopping')
})