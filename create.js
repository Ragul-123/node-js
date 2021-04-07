const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:9000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let employees = [];

app.get('/home', function(req, res) {
  console.log('Inside Home Login');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  console.log('Books : ', JSON.stringify(employees));
  res.end(JSON.stringify(employees));
});

app.post('/create', function(req, res) {
  const newEmployee = {
    email: req.body.email,
    password: req.body.password,
  };

  employees.push(newEmployee);
  console.log(employees);
});

