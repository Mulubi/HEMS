// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// console.log("HEMS App");

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
require('dotenv').config();
require('express-async-errors');
const express = require('express');

const equipment = require('./routes/equipment');
const maintenance = require('./routes/maintenance');
const technician = require('./routes/technician');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

// middleware
app.use(express.static('./public'));
app.use(express.json());


// Routes
app.get('/', (req, res) => {
   res.send('<h1>Hello, welcome to the HEMS App</h1><a href="/api/v1/equipment">Check Equipment Here! </>')
});

// Equipment Route
app.use('/api/v1/equipment',equipment);
app.use('/api/v1/maintenance',maintenance);
app.use('/api/v1/technician',technician);

// Errors
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server running on port: ${port}...`));
    } catch (error) {
        console.log(error)
    }
};

start();
console.log("HEMS App");
