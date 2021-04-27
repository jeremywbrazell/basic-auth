'use strict'

require('dotenv').config;
const PORT = process.env.PORT || 3333;
const mongoose = require('mongoose');

const server = require('./src/server.js')
mongoose.connect = (process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

server.start(PORT);