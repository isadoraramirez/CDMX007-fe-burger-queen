import React from 'react';
import ReactDOM from 'react-dom';

//import '../App'
import './index.css';
// import firebase from 'firebase';
// firebase.initializeApp({
//   apiKey: "AIzaSyA6EX_Y2l7MxOaJmAfPx5HUAYUIpX6WtpE",
//     authDomain: "ely-burguer-queen.firebaseapp.com",
//     databaseURL: "https://ely-burguer-queen.firebaseio.com",
//     projectId: "ely-burguer-queen",
//     storageBucket: "ely-burguer-queen.appspot.com",
//     messagingSenderId: "324480551011",
//     appId: "1:324480551011:web:4aebb526702756f0"
// })

class Square extends React.Component {
    render() {
      return (
        <button
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  //contructor en el board establece su estado inicial 
  //para contener un arreglo con  valores null (los cuadrados)
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'ABRIR MESA';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  