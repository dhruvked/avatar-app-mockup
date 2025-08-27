import React from 'react';

function Screen1({ onTalkClick }) {
  return (
    <div className="App">
      <div className="container">
        <h1>Celebrity Avatar</h1>
        <div className="video-container">
          <video 
            className="celebrity-video"
            autoPlay 
            loop 
            muted
            playsInline
          >
            <source src="/sample-video.mp4" type="video/mp4" />
            <div className="video-placeholder">
              <p>Video not supported</p>
            </div>
          </video>
        </div>
        <button onClick={onTalkClick} className="talk-button">
          Talk to Celebrity X
        </button>
      </div>
    </div>
  );
}

export default Screen1;