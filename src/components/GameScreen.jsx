import React, { useState, useEffect } from 'react';

const GameScreen = ({ mode, onGameEnd }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [showEndGameDialog, setShowEndGameDialog] = useState(false);
  const [showResultDialog, setShowResultDialog] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (index) => {
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      if (newWinner === 'X') {
        setPlayer1Wins(player1Wins + 1);
      } else {
        setPlayer2Wins(player2Wins + 1);
      }
      setShowResultDialog(true);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      if (newBoard.every(cell => cell !== null)) {
        setIsDraw(true);
        setShowResultDialog(true);
      }
    }
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setShowResultDialog(false);
    setIsDraw(false);
  };

  const handleBotMove = () => {
    if (currentPlayer === 'O' && mode === '1vsBot') {
      const availableMoves = board.map((cell, index) => cell === null ? index : null).filter(Boolean);
      const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      handleClick(randomMove);
    }
  };

  useEffect(() => {
    if (mode === '1vsBot' && currentPlayer === 'O') {
      handleBotMove();
    }
  }, [currentPlayer, mode]);

  const handleEndGame = () => {
    setShowEndGameDialog(true);
  };

  const confirmEndGame = () => {
    setShowEndGameDialog(false);
    onGameEnd();
  };

  const cancelEndGame = () => {
    setShowEndGameDialog(false);
  };

  return (
    <div className="game-screen">
      <h1>Tic Tac Toe</h1>
      <div className="turn-display">
        Turn: {currentPlayer}
      </div>
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <button onClick={handleEndGame}>Finalizar Partida</button>
      {showResultDialog && (
        <div className="result-dialog">
          <h2>{isDraw ? "It's a Draw!" : `${winner} wins!`}</h2>
          <p>Player 1 Wins: {player1Wins}</p>
          <p>Player 2 Wins: {player2Wins}</p>
          <button onClick={resetGame}>Volver a jugar</button>
          <button onClick={onGameEnd}>Ir al inicio</button>
        </div>
      )}
      {showEndGameDialog && (
        <div className="end-game-dialog">
          <h2>¿Desea salir?</h2>
          <button onClick={confirmEndGame}>Sí</button>
          <button onClick={cancelEndGame}>No</button>
        </div>
      )}
    </div>
  );
};

export default GameScreen;
