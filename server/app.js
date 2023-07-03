// const http = require('http');
import http from 'http';
const hostname = '127.0.0.1';

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
// require('dotenv').config();
// require('body-parser');
// require('mongoose');
// require('cors');
// require('helmet');
// require('morgan');


import express from 'express';
const app = express();
import 'express-async-errors';


import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// const equipment = require('./routes/equipment');
// const maintenance = require('./routes/maintenance');
// const technician = require('./routes/technician');
// const connectDB = require('./db/connect');
// const notFound = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');

import client from './routes/client.js';
import general from './routes/general.js';
import management from './routes/management.js';
import requests from './routes/requests.js';
import equipment from './routes/equipment.js';
import maintenance from './routes/maintenance.js';
import technician from './routes/technician.js';
import connectDB from './db/connect.js';
// import requestsRoutes from './routes/requests.js';

import dotenv from 'dotenv';
dotenv.config();

import errorHandlerMiddleware from './middleware/error-handler.js'
import notFound from './middleware/not-found.js';

//Data imports
import RequestStat from './models/requestStat.js';
import MaintenanceRequest from './models/request.js';
import Equipment from './models/equipment.js';
import EquipmentStat from './models/equipmentStat.js';
import User from './models/user.js';
// import {
//     dataUser,
//     dataRequestStat,
//     dataMaintenanceRequest,
//     dataEquipment,
//     dataEquipmentStat
// } from './data/index.js';
import {
    dataUser
} from './data/index.js';
import { error } from 'console';


// // middleware
// app.use(express.static('./public'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// configuration settings
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
// app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());


// Test Routes
// app.get('/', (req, res) => {
//    res.send('<h1>Hello, welcome to the HEMS App</h1><a href="/api/v1/equipment">Check Equipment Here! </>')
// });

// Main App Routes
app.use('/api/v1/equipment',equipment);
app.use('/api/v1/maintenance',maintenance);
app.use('/api/v1/technician',technician);
app.use('/api/v1/client',client);
app.use('/api/v1/general',general);
app.use('/api/v1/management',management);
app.use('/api/v1/requests',requests);
// app.use('/api/v1/maintenance',maintenance);
// app.use('/api/v1/technician',technician);





// Errors
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

// Mongoose setup
// const PORT = process.env.PORT || 6001;
// mongoose.connectDB(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     app.listen(port, () => console.log(`Server Port: ${port}`));
//     // Equipment.insertMany(dataEquipment);
//     // EquipmentStat.insertMany(dataEquipmentStat);
//     // MaintenanceRequest.insertMany(dataMaintenanceRequest);
//     // RequestStat.insertMany(dataRequestStat);
//     //User.insertMany(dataUser);

// }).catch((error) => console.log(`${error} did not connect`));

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Wice');
// });

// console.log("HEMS App");

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server running on port: ${port}...`));
        // User.insertMany(dataUser);
    } catch (error) {
        console.log(error)
    }
};


// const start = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
//     // User.insertMany(dataUser);
//   } catch (error) {
//     console.log(error);
//   }
// };

start();

console.log("HEMS App");
// app.listen(port, () => console.log(`Server Port: ${port}`));
