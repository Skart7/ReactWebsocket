require('dotenv').config()

const express = require('express')
const cors = require('cors')

const socket = require("socket.io")

const LoginRouter = require('./router/user')
const RoomRouter = require('./router/room')
const MessageRouter = require('./router/message')

const _port = 5000

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/user', LoginRouter)
app.use('/api/room', RoomRouter)
app.use('/api/message', MessageRouter)

const server = app.listen(_port, () => console.log('server has been started'))

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  }
})

let users = []

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) && users.push({ userId, socketId })
}

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
}
  
  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
}

io.on("connection", (socket) => {

    socket.on("addUser", (userId) => {
        addUser(userId, socket.id)
        io.emit("getUsers", users)
    })


    socket.on("sendMessage", ({ to, from, text }) => {

        const user = getUser(to)

        if(user) {
          io.to(user.socketId).emit("getMessage", {
            from,
            text,
          })
        }
 
    })

  socket.on("disconnect", () => {
    removeUser(socket.id)
    io.emit("getUsers", users)
  })

})