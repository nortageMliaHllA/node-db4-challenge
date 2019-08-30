const express = require('express');
const server = express();
const Router = require('./router');

server.use(express.json());
server.use('/api/recipes', Router);

module.exports = server;