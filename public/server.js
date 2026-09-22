const http = require('http');
const {handrquest} = require('./request-handler');

const port = 3000;
const server = http.createServer(handrquest);
