app = require './corsExpress'


app.get '/', (req, res) ->
  res.send 'Hello World!'
  return
server = app.listen(3000, ->
  host = server.address().address
  port = server.address().port
  return
)
