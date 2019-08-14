const port = 3000;
const express = require('express');
const app = express();
const server = app.listen(port, () => console.log(`Server running on port ${port}`)); // listen on port 3000
const io = require('socket.io')(server);

//middleware
app.use(express.static('public'));

//route
app.get('/', (req, res) => {
  res.sendFile('public/index.html');
})

//socket.io
io.on('connection', socket => {
  console.log(`user ${socket.id} connected`);

  socket.on('disconnect', () => {
    console.log(`user ${socket.id} disconnected`);
  })
  
  socket.on('playerPosition', data => {
    socket.emit('player2Position', {
      posX: data.posX,
      posY: data.posY
    })
  })
})