import React, { useState, useEffect } from 'react';
import IPhoneFrame from './components/IPhoneFrame/IPhoneFrame.js';
import Clock from './components/modules/Clock.js';
import WakeLockController from './components/WakeLockController/WakeLockController';
import './App.css';

function App() {
  return (
    <div className="App">
      <IPhoneFrame>
        <div className="standby-mode">
          <WakeLockController />
          <Clock />
          <div className="placeholder-modules">
            {/* Additional modules will be added here later */}
          </div>
        </div>
      </IPhoneFrame>
    </div>
  );
}

export default App;