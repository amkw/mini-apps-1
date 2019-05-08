var parse = require('./parseJSON.js').parse;

var express = require('express');
var app = express();
var port = 5501;

// Tell express to serve up files in client folder
// Default: looks for index.html file
app.use(express.static('client'));
app.use(express.json());

app.post('/', (req, res) => {
  console.log('POST request to /')
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    let buf = Buffer.concat(body).toString();
    // let json = buf.toJSON();
    console.log('buf', buf);
  })
    // at this point, `body` has the entire request body stored in it as a string
  // var flattened = parse(req.body);
  // console.log(flattened);
  // res.sendFile('index.html');
  res.end();
});

app.listen(port);