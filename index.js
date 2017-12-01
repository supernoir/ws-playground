const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 9922;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket) {
  console.log('New Connection established');

  socket.emit('message-from-server', {
    greeting: 'Hello from Server',
  });

  socket.on('message-from-client', function(msg) {
    console.log(msg);
  });
});
server.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

