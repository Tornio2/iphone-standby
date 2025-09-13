import React, { useState } from 'react';
import IPhoneFrame from './components/IPhoneFrame/IPhoneFrame.js';
import OrientationToggle from './components/IPhoneFrame/OrientationToggle.js';
import Clock from './components/modules/Clock.js';
import WakeLockController from './components/WakeLockController/WakeLockController';
import './App.css';

function App() {
  const [isLandscape, setIsLandscape] = useState(true);

  const handleOrientationToggle = () => {
    setIsLandscape(!isLandscape);
  };

  return (
    <div className="App">
      <IPhoneFrame isLandscape={isLandscape}>
        <div className="standby-mode">
          <WakeLockController />
          <Clock />
          <div className="placeholder-modules">
            {/* Additional modules will be added here later */}
          </div>
        </div>
      </IPhoneFrame>
      <OrientationToggle 
        isLandscape={isLandscape} 
        onToggle={handleOrientationToggle} 
      />
    </div>
  );
}

export default App;