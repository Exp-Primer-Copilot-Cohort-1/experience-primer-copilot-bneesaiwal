// Create web server
// Respond to any request with a page containing a form
// Form should submit data to a different route
// Log submitted data to the console
// Respond to request to /data with a JSON object of the form data

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.send('<form method="post" action="/data"><input type="text" name="name"><input type="submit" value="Submit"></form>');
});

app.post('/data', function(req, res) {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});