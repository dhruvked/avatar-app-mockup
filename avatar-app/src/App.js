import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const goToScreen2 = () => {
    setCurrentScreen(2);
  };

  const goToScreen1 = () => {
    setCurrentScreen(1);
  };

  if (currentScreen === 1) {
    return (
      <div className="App">
        <div className="container">
          <h1>Celebrity Avatar</h1>
          <div className="video-placeholder">
            <p>Video Playing Here</p>
          </div>
          <button onClick={goToScreen2} className="talk-button">
            Talk to Celebrity X
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Talking with Celebrity X</h1>
        <div className="avatar-interface">
          <p>Avatar listening/responding interface</p>
          <button onClick={goToScreen1} className="back-button">
            Back to Video
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;