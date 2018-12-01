const express = require("express");
const app = express();

// This is the connection towards the Telldus API.
app.use(require('./api'));

// Load the static files.
app.use('/js', express.static(__dirname + '/app/js'));
app.use('/css', express.static(__dirname + '/app/css'));

// Make client-side routing work.
app.all('/', function (req, res, next) {
    res.sendFile(__dirname + '/app/index.html');
});

const port = 8080;
app.listen(port);
console.log("App listening on port " + port);