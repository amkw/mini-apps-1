var parse = require('./parseJSON.js').parse;
var fs = require('fs');
// var html = require('./client/index.html');

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
    res.send(`<form action='/' method='post'>
      <input type="file" class="file" /><br>
      <input type='submit' value='submit'>
    </form><br>${flattened}`);
    res.end();
  });
});

app.listen(port);