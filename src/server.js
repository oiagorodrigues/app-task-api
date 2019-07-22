'use strict'

const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3333;

const server = http.Server(app);

server.listen(port, () => console.log(`Api iniciada na porta ${port}`));
