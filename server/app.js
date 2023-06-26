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
// require('dotenv').config();
// require('body-parser');
// require('mongoose');
// require('cors');
// require('helmet');
// require('morgan');

import 'express-async-errors';
import express from 'express';

import dotenv from 'dotenv';
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

import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import requestsRoutes from './routes/requests.js';
import equipmentRoutes from './routes/equipment.js';
import maintenanceRoutes from './routes/maintenance.js';
import technicianRoutes from './routes/technician.js';
// import requestsRoutes from './routes/requests.js';


//Data imports
import User from './models/user.js';
import { dataUser } from './data/index.js';

// configuration settings
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// // middleware
// app.use(express.static('./public'));


// Test Routes
// app.get('/', (req, res) => {
//    res.send('<h1>Hello, welcome to the HEMS App</h1><a href="/api/v1/equipment">Check Equipment Here! </>')
// });

// Main App Routes
app.use('/api/v1/equipment',equipmentRoutes);
app.use('/api/v1/maintenance',maintenanceRoutes);
app.use('/api/v1/technician',technicianRoutes);
app.use('/api/v1/client',clientRoutes);
app.use('/api/v1/general',generalRoutes);
app.use('/api/v1/management',managementRoutes);
app.use('/api/v1/requests',requestsRoutes);
// app.use('/api/v1/maintenance',maintenance);
// app.use('/api/v1/technician',technician);

// // Errors
// app.use(notFound);
// app.use(errorHandlerMiddleware);

// Mongoose setup
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    //User.insertMany(dataUser);

}).catch((error) => console.log(`${error} did not connect`));




// const start = async () => {
//     try {
//         await connectDB(process.env.MONGO_URL)
//         app.listen(port, console.log(`Server running on port: ${port}...`));
//     } catch (error) {
//         console.log(error)
//     }
// };

// const PORT = process.env.PORT || 6001;
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

// start();

console.log("HEMS App");
