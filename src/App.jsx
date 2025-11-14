/**
 * App.jsx
 * Main app component managing mode switching
 */

import React, { useState } from 'react';
import Terminal from './terminal/Terminal.jsx';
import VisualLayout from './components/VisualLayout.jsx';

const App = () => {
  const [mode, setMode] = useState('landing'); // 'landing', 'terminal', 'visual'

  const switchMode = (newMode) => {
    setMode(newMode);
  };

  if (mode === 'landing') {
    return (
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="landing-title">Ashish's Portfolio</h1>
          <p className="landing-subtitle">Welcome to my interactive portfolio</p>
          
          <div className="landing-buttons">
            <button
              className="btn btn-primary btn-large"
              onClick={() => switchMode('terminal')}
            >
              💻 Enter Terminal Mode
            </button>
            <button
              className="btn btn-secondary btn-large"
              onClick={() => switchMode('visual')}
            >
              🎨 Enter Visual Mode
            </button>
          </div>

          <div className="landing-info">
            <p>Choose your preferred way to explore my work and background.</p>
            <p className="landing-hint">Terminal Mode: Type commands like "help" and "./about"</p>
            <p className="landing-hint">Visual Mode: Scroll through a modern portfolio interface</p>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'terminal') {
    return <Terminal onSwitchMode={() => switchMode('visual')} />;
  }

  if (mode === 'visual') {
    return <VisualLayout onSwitchMode={() => switchMode('terminal')} />;
  }
};

export default App;
