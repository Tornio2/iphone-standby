import React from 'react';
import './IPhoneFrame.css';

const IPhoneFrame = ({ children, isLandscape = true }) => {
  return (
    <div className="iphone-container">
      <div className={`iphone-frame ${isLandscape ? 'landscape' : 'portrait'}`}>
        <div className={`iphone-notch ${isLandscape ? 'landscape' : 'portrait'}`}>
          <div className="iphone-speaker"></div>
          <div className="iphone-camera"></div>
        </div>
        <div className="iphone-screen">
          {children}
        </div>
        <div className={`iphone-button ${isLandscape ? 'landscape' : 'portrait'}`}></div>
      </div>
    </div>
  );
};

export default IPhoneFrame;