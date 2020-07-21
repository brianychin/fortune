var express = require('express');
var app = express();

var ip = require("ip");
var ipadd = ip.address()
console.dir(req.ip)
console.dir(req.connection.remoteAddress)

app.get('/', function(req, res) {
  res.send(`fortune of the day coming soon. page is hosted at ${ipadd}`);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});