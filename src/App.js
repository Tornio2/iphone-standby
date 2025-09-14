import React, { useState } from 'react';
import IPhoneFrame from './components/IPhoneFrame/IPhoneFrame.js';
import OrientationToggle from './components/IPhoneFrame/OrientationToggle.js';
import Clock from './components/modules/Clock.js';
import WakeLockController from './components/WakeLockController/WakeLockController';
import OneBigTwoSmallTemplate from './components/templates/OneBigTwoSmallTemplate.js';
import './App.css';

function App() {
  const [isLandscape, setIsLandscape] = useState(true);

  const toggleOrientation = () => {
    setIsLandscape(!isLandscape);
  };

  return (
    <div className="App">
      <IPhoneFrame isLandscape={isLandscape}>
        <div className="standby-mode">
          {/* <WakeLockController /> */}
          <OneBigTwoSmallTemplate
            isLandscape={isLandscape} 
            mainContent={<Clock />}
            topRightContent={<div>Top Right Content</div>}
            bottomRightContent={<div>Bottom Right Content</div>}
          />
        </div>
      </IPhoneFrame>
      <OrientationToggle 
        isLandscape={isLandscape} 
        onToggle={toggleOrientation} 
      />
    </div>
  );
}

export default App;