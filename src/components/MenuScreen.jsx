import React from 'react';

const MenuScreen = ({ onSelect }) => {
  return (
    <div className="menu-screen">
      <h1>Tic Tac Toe</h1>
      <button onClick={() => onSelect('1vs1')}>Iniciar 1vs1</button>
      <button onClick={() => onSelect('1vsBot')}>Iniciar 1 vs Bot</button>
    </div>
  );
};

export default MenuScreen;
