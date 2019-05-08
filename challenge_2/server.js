var parse = require('./parseJSON.js').parse;
var fs = require('fs');

var express = require('express');
var app = express();
var port = 5501;

// Tell express to serve up files in client folder
// Default: looks for index.html file
app.use(express.static('client'));
app.use(express.json());

app.post('/', (req, res) => {
  console.log('POST request to /')
  var flattened = '';
  fs.readFile('./samples/sales_report.json', (err, data) => {
    if (err) throw err;
    flattened = parse(JSON.parse(data.toString()));
    console.log(flattened);
    res.end();
  });
});

app.listen(port);