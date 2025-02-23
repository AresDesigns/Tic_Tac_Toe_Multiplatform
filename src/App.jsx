import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MenuScreen from './components/MenuScreen';
import GameScreen from './components/GameScreen';
import './index.css';

const App = () => {
  const [screen, setScreen] = useState('loading');
  const [gameMode, setGameMode] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen('menu');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleMenuSelection = (mode) => {
    setGameMode(mode);
    setScreen('game');
  };

  return (
    <div className="app">
      {screen === 'loading' && <LoadingScreen />}
      {screen === 'menu' && <MenuScreen onSelect={handleMenuSelection} />}
      {screen === 'game' && <GameScreen mode={gameMode} onGameEnd={() => setScreen('menu')} />}
    </div>
  );
};

export default App;
