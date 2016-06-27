const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

export function startServer (store) {
  const PORT = process.env.PORT || 3000
  server.listen(PORT, function () {
    console.log(`Listening on ${ PORT }`)
  });

  io.on('connection', function (socket) {
    console.log('Client connected')
    socket.on('disconnect', () => console.log('Client disconnected'))
  });

}
