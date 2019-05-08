var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

var indexhtmlpath = path.join(__dirname,'/public/index.html');

app.use(express.static('public'));

app.get('/home', (req, res) => {
  console.log('GET to /home');
  res.sendFile(indexhtmlpath);
});

app.listen(port);