import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
import Board from './components/board';
import ResetBtn from './components/resetBtn';
import JoinBtn from './components/joinBtn';
import CreateBtn from './components/createBtn';
import CurrentPlayer from './components/currentPlayer';
import GameInfo from './components/gameInfo';

const size = 9;
let board = [];
for(let i = 0; i < size; i++) {
  board.push({position: i, status: "available"})
}

//const socket = io('http://localhost:1337');
const socket = io('https://tic-tac-toe-react-multi.herokuapp.com');


class App extends Component {
  state = { 
    clientId: "",
    gameId: "",
    caseInfo: board,
    gameOver: false,
    players: [],
    sign: "#",
    currentPlayer: ""
  }

  handleOnPlay = (caseInfo) => {
    let board = [...this.state.caseInfo];
    if(!this.state.gameOver && this.state.currentPlayer === this.state.clientId && 
      board[caseInfo.position].status === "available") {
      
      board[caseInfo.position].status = this.state.sign;

      const checkIfOneIsAvailable = cell => cell.status === "available";

      let gameOver = this.state.gameOver;
      let gotWinner = false;
      if (
      (board[0].status === board[1].status && board[1].status === board[2].status && board[0].status !== "available") ||
      (board[3].status === board[4].status && board[4].status === board[5].status && board[3].status !== "available") ||
      (board[6].status === board[7].status && board[7].status === board[8].status && board[6].status !== "available") ||

      (board[0].status === board[3].status && board[3].status === board[6].status && board[0].status !== "available") ||
      (board[1].status === board[4].status && board[4].status === board[7].status && board[1].status !== "available") ||
      (board[2].status === board[5].status && board[5].status === board[8].status && board[2].status !== "available") ||

      (board[0].status === board[4].status && board[4].status === board[8].status && board[0].status !== "available") ||
      (board[2].status === board[4].status && board[4].status === board[6].status && board[2].status !== "available") 
      ) {
        gameOver = true;
        gotWinner = true;
      } else if (!this.state.caseInfo.some(checkIfOneIsAvailable)) {
        gameOver = true;
      }
      const {clientId, gameId, currentPlayer, players} = this.state;
      let state = {clientId, gameId, board, gameOver, currentPlayer, players, gotWinner};

      socket.emit('play', state);
      }
  }

  handleJoin = () => {
    const {gameId, clientId} = this.state;
    /*if(gameId === "") {
      //prendre la value de l'input
    }*/
    const joinInfo = {
      clientId,
      gameId
    }
    socket.emit('join', joinInfo);
  }

  handleCreate = () => {
    const {clientId} = this.state;
    const game = {
      clientId,
      board
    }
    socket.emit('create', game);
  }

  handleReset = () => {
    let board = [];
    for(let i = 0; i < size; i++) {
      board.push({position: i, status: "available"})
    }

    let state = {gameId: this.state.gameId, board, gameOver: false};

    socket.emit('reset', state);
  }

  handleGameIdChange = (e) => {
    this.setState({
        gameId: e.target.value
    });
  }

  componentDidMount(){
    socket.on('play', (state) => {
      this.setState({ caseInfo: state.board, gameOver: state.gameOver, currentPlayer: state.currentPlayer, players: state.players })
    });

    socket.on('reset', (state) => {
      this.setState({ caseInfo: state.board, gameOver: state.gameOver })
    });
    
    socket.on('clientConnect', (userId) => {
      this.setState({ clientId: userId })
      console.log(`Client ${userId} has connected`)
    });

    socket.on('create', (game) => {
      this.setState({ gameId: game.id, caseInfo: game.board})
      console.log(`Game ${game.id} has been created`)
    });

    socket.on('join', (game) => {
      const player = game.clients.find(client => client.clientId === this.state.clientId);
      console.log(`${game.clients[game.clients.length-1].clientId} joined game ${game.id}`)
      
      this.setState({ sign: player.sign, players: game.clients, currentPlayer: game.currentPlayer })
    });
  }

  render() { 
    return ( 
    <React.Fragment>
      <h1>Tic-tac-toe</h1>
      <div id="gameTitle">Game ID: {this.state.gameId}</div>
    
      <GameInfo players={this.state.players} clientId={this.state.clientId} />
      <CreateBtn onCreate={this.handleCreate} />
      <JoinBtn onJoin={this.handleJoin} onChange={this.handleGameIdChange} gameId={this.state.gameId} />
      {this.state.players.length === 2 ? 
      <React.Fragment>
        <Board size={9} onPlay={this.handleOnPlay} caseInfo={this.state.caseInfo} />
        {!this.state.gameOver && <CurrentPlayer player={this.state.currentPlayer} clientId={this.state.clientId} />}
      </React.Fragment>: 
      this.state.players.length === 1 &&
      <div id="waitingMsg">Waiting for another player</div>} 
      {this.state.gameOver && <ResetBtn onReset={this.handleReset}/>}
    </React.Fragment>
    );
  }
}

export default App;
