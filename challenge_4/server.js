var path = require('path');
var express = require('express');
var app = express();

var port = 8000;

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('/', (req, res) => {
  console.log('GET to /');
  res.render(index);
  res.statusCode(200);
});

app.listen(port);