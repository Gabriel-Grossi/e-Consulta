const express = require('express');
const server = express();
const path = require('path')
const route = require('./route')
//const api = require('./api');

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'));
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(route);
//server.use(api);
server.listen(5000, () => console.log('Running'))