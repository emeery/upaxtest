const express = require('express')
const bodyparser = require('body-parser')
require('./config/db') // db

const userRouter = require('./controller/user.controller')

var app = express()
app.use(bodyparser.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use('/user', userRouter)

module.exports = app
