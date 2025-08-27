import React, { useState, useEffect } from 'react';
import './App.css';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [sessionId, setSessionId] = useState(null);

  // Auto-timeout after 2 minutes of inactivity (120000ms)
  const TIMEOUT_DURATION = 120000;

  useEffect(() => {
    let timeoutId;

    if (currentScreen === 2) {
      // Reset timeout on screen 2
      timeoutId = setTimeout(() => {
        console.log('Session timed out, returning to Screen 1');
        goToScreen1();
      }, TIMEOUT_DURATION);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentScreen]);

  const goToScreen2 = () => {
    // Generate new session ID
    const newSessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    setSessionId(newSessionId);
    console.log('New session started:', newSessionId);
    setCurrentScreen(2);
  };

  const goToScreen1 = () => {
    if (sessionId) {
      console.log('Session ended:', sessionId);
      setSessionId(null);
    }
    setCurrentScreen(1);
  };

  if (currentScreen === 1) {
    return <Screen1 onTalkClick={goToScreen2} />;
  }

  return <Screen2 onBackClick={goToScreen1} sessionId={sessionId} />;
}

export default App;