import React, { useState } from 'react';
import './App.css';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const goToScreen2 = () => {
    setCurrentScreen(2);
  };

  const goToScreen1 = () => {
    setCurrentScreen(1);
  };

  if (currentScreen === 1) {
    return <Screen1 onTalkClick={goToScreen2} />;
  }

  return <Screen2 onBackClick={goToScreen1} />;
}

export default App;