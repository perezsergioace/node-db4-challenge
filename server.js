const express = require('express');

const recipesRouter = require('./recipes/recipesRouter');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
    res.send('This is working!');
})

module.exports = server;