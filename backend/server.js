const http = require('http');
const app = require('./app');
const { v4: uuidv4 } = require('uuid');

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '1337');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

const io = require("socket.io")(server, {
  cors: {
    //origin: "http://localhost:3000",
    origin: "https://phuongdattran.github.io",
    methods: ["GET", "POST"]
  }
});

server.listen(port);

const games = {};

const size = 9;
let board = [];
for(let i = 0; i < size; i++) {
  board.push({position: i, status: "available"})
}

io.on('connection', function (socket) {
  console.log("made socket connection", socket.id);
  socket.emit('clientConnect', socket.id);

  socket.on('play', function(state){
    let {currentPlayer, players, gameOver, gotWinner} = state;

    if(gameOver && gotWinner) {
      const winnerIndex = players.findIndex(player => player.clientId == currentPlayer);
      players[winnerIndex].score ++;
    }

    if (currentPlayer == players[0].clientId) {
      currentPlayer = players[1].clientId;
    } else {
      currentPlayer = players[0].clientId;
    }
    state.currentPlayer = currentPlayer;

    io.sockets.to(state.gameId).emit('play', state);
  });

  socket.on('reset', function(state){
    io.sockets.to(state.gameId).emit('reset', state);
  });

  socket.on('create', function(game){
    const gameId = uuidv4();
    games[gameId] = {
      id: gameId,
      clients: [],
      board
    }
    socket.emit('create', games[gameId]);
  });
  
  socket.on('join', function(joinInfo){
    const {clientId, gameId} = joinInfo;
      if (games.hasOwnProperty(gameId)) {
      let game = games[gameId];

      const checkClientId = client => client.clientId === clientId;
      
      if (game.clients.length >=2) {
        console.log(`Game ${gameId} is full`)
        return;
      } else if (game.clients.some(checkClientId)) {
        console.log(`Client ${clientId} is already in game ${gameId}`)
        return;
      }
      const sign = {"0": "X", "1": "O"}[game.clients.length];
      game.clients.push({clientId,sign, score:0})

      //Select random start player
      let startingPlayer = game.clients[0].clientId;
      if(game.clients.length==2) {
        startingPlayer = game.clients[Math.floor(Math.random() * 2)].clientId;
      }
      game.currentPlayer = startingPlayer;

      socket.join(gameId);

      io.sockets.to(gameId).emit('join', game);
    } else {
      console.log(`The game ${gameId} does not exist`);
    }
  });

});
