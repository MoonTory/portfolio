const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

const indexRoute = require('./api/routes/index');

// Helmet Middleware
app.use(helmet());

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

app.use('/', indexRoute);

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

module.exports = app;