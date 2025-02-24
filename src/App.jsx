import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MenuScreen from './components/MenuScreen';
import GameScreen from './components/GameScreen';
import './index.css';
import './tailwind.css';

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
    <div className="app relative h-full w-full">
  
   <div class="absolute animate-move bottom-0 left-0 -z-9 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_3px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="content relative z-10 flex flex-col items-center justify-center h-screen text-white">
        {screen === 'loading' && <LoadingScreen />}
        {screen === 'menu' && <MenuScreen onSelect={handleMenuSelection} />}
        {screen === 'game' && <GameScreen mode={gameMode} onGameEnd={() => setScreen('menu')} />}
      </div>
    </div>
  );
};

export default App;
