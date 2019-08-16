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

let players = [false, false, false, false];

//socket.io
io.on('connection', socket => {
  console.log(`user ${socket.id} connected`);

  socket.emit('playersListUpdate', {
    players: players
  })

  socket.on('chooseTeam', data => {
    switch (data.team) {
      case 'blue':
        socket.place = 0;
        players[0] = socket.id;
        break;
      case 'purple':
        socket.place = 1;
        players[1] = socket.id;
        break;
      case 'red':
        socket.place = 2;
        players[2] = socket.id;
        break;
      case 'yellow':
        socket.place = 3;
        players[3] = socket.id;
        break;
      default:
        break;
    }
    console.table(players);
    socket.emit('playersListUpdate', {
      players: players
    })
  })

  setInterval(() => {
    socket.emit('playersListUpdate', {
      players: players
    })
  }, 100);

  socket.on('triggerGameScene', data => {
    io.emit('playGameScene', true);
  });

  socket.on('disconnect', () => {
    console.log(`user ${socket.id} disconnected`);
    players[socket.place] = false;
  })

})