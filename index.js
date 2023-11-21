const http = require('http');
const path = require('path');
const express = require("express");
const { Server } = require('socket.io');
const app = express();


const server = http.createServer(app);
const io = new Server(server);

//Socket.io -> Create WebSocket connection and send messages to the user:
io.on('connection', (socket) => {
    socket.on('message', (message) => {
        io.emit("message", message);
    })
})

app.use(express.static(path.resolve("./public")));
app.get('/', (req, res) => {
    return res.sendFile('./public/index.html');
})

server.listen(3000, () => {
    console.log(`Server Started at PORT 3000`);
})

