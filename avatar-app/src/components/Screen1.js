import React from 'react';

function Screen1({ onTalkClick }) {
  return (
    <div className="App">
      <div className="container">
        <h1>Celebrity Avatar</h1>
        <div className="video-placeholder">
          <p>Video Playing Here</p>
        </div>
        <button onClick={onTalkClick} className="talk-button">
          Talk to Celebrity X
        </button>
      </div>
    </div>
  );
}

export default Screen1;