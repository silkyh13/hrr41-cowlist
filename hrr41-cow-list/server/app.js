var express = require('express');
// var db = require('./db');
var path = require('path');
// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();


// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/api', router);

// Serve the client files
//what these two lines do is when the user hits '/' end point, it will find the file /../dist/index.html' and send it to the client
//what it means is when i refresh and im on the homepage, its going to find index,html in dist folder and send it to client
//if i change client code and refresh, ill get the newest version, which will allow us not to restart the server when we are changing the client code
//everytime we refresh, we send a get request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../dist/index.html'));
});
// main.js holds all the frontend js code (react) for our app
// if we change this file and the person refreshes they will see the updates
// this file will only update, when npm run build finishes....
//compiles jsx code to js so now we dont need run babel
app.get('/dist/main.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/../dist/main.js'));
});

// app.use(express.static(__dirname + '/../client'));
// app.use(express.static(__dirname + '/../dist'));
// app.use(express.static(__dirname + '/../node_modules'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

module.exports.app = app;