// Main Imports
import express, { urlencoded, json } from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler, errorLog } from '../utils';

// Route Imports
import { indexRouter } from '../api/routes';

// Initializing Express App
const app = express();

// - Middleware STACK - //

// Helmet Middleware
app.use(helmet());
// Bodyparser Middleware
app.use(json());
// URL Middleware
app.use(urlencoded({extended: true}));
// Morgan Logging
app.use(morgan('dev'));

// DB Config
const db = require('../config/keys').mongoURI;

// - Routing - //
app.use('/', indexRouter);

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  // Error Handling
  app.use(errorHandler);
  app.use(errorLog);

export default app;