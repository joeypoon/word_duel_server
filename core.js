function createUser (db, message) {
  db.collection('users').insert(message, function (err, result) {
    console.log("User created: ", result)
    db.close()
  })
}

export default function connectionHandler (socket, db) {
  socket.on('createUser', message => createUser(db, message))
}
