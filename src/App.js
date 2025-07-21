import logo from './logo.svg';
import './App.css';
import {gameSubject} from './Game'
import {useEffect, useState} from 'react';
import Board from './Board';

function App() {
  const[board, setBoard] = useState([])
  useEffect(() => {
    const subscribe = gameSubject.subscribe(game => setBoard(game.board))
    return () => subscribe.unsubscribe()
  },[])

  return (
    <div className='container'>
      <div className='board-container'>
        <Board board = {board}></Board>
      </div>  
    </div>
  );
}

export default App;
