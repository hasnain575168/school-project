const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

const mongoose = require('mongoose');

const {
  PORT,
  DATABASE_URI,
} = require('./config');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.DATABASE_URI || DATABASE_URI);

// Main Routes
const routes = require('./routes');

app.use(routes);

app.get('*', (req, res) => {
  res.render('index');
});

app.listen((process.env.PORT || PORT), (error) => {
  if (error) {
    throw error;
  }
});
