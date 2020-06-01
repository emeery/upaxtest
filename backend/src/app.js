const express = require('express')
const bodyparser = require('body-parser')
require('./config/db') // db

const userRouter = require('./controller/user.controller')

var app = express()
app.use(bodyparser.json())

app.use('/user', userRouter)

module.exports = app
