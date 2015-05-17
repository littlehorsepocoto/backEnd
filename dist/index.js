var app, server;

app = require('./corsExpress');

app.get('/', function(req, res) {
  res.send('Hello World!');
});

server = app.listen(3000, function() {
  var host, port;
  host = server.address().address;
  port = server.address().port;
});
