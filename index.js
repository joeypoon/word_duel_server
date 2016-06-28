const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongo = require('mongodb').MongoClient
import connectionHandler from './core'

const port = process.env.PORT || 3000
server.listen(port, function () {
  console.log(`Listening on ${ port }`)
})

const url = 'mongodb://127.0.0.1/word_duel'
mongo.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err)
  } else {
    console.log('Connection established to', url)

    io.on('connection', function (socket) {
      console.log('Client connected')
      connectionHandler(socket, db)
      socket.on('disconnect', () => console.log('Client disconnected'))
    })
  }
})
