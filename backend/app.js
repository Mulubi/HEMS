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

const express = require('express');
const app = express();
const equipment = require('./routes/equipment');
//const performMaintenance = require('.routes/equipment/performMaintenance');
const maintenance = require('./routes/maintenance');
const technician = require('./routes/technician');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

//Routes
//app.get('/', (req, res) => {
   // res.send('Hello, welcome to the HEMS')
//});

app.use('/api/v1/equipment',equipment);
//app.use('/api/v1/equipment/:id/maintenance',performMaintenance);

app.use('/api/v1/maintenance',maintenance);

app.use('/api/v1/technician',technician);

//errors
app.use(notFound);
app.use(errorHandlerMiddleware);

// gets a list of all equipment in the hospital inventory
app.get('/api/v1/equipment', (req, res) => {
    res.send('/api/v1/equipment');
});

// gets the maintenance schedule for a specific equipment item.
app.get('/api/v1/equipment/{id}/maintenance', (req, res) => {
    res.send('/api/v1/equipment/{id}/maintenance');
});



// gets a list of all maintenance activities in the hospital inventory
app.get('/api/v1/maintenance', (req, res) => {
    res.send('/api/v1/maintenance');
});

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server running on port ${port}...`));
    } catch (error) {
        console.log(error)
    }
};

start();
console.log("HEMS App");
