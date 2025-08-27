import React from 'react';

function Screen2({ onBackClick }) {
  return (
    <div className="App">
      <div className="container">
        <h1>Talking with Celebrity X</h1>
        <div className="avatar-interface">
          <p>Avatar listening/responding interface</p>
          <button onClick={onBackClick} className="back-button">
            Back to Video
          </button>
        </div>
      </div>
    </div>
  );
}

export default Screen2;