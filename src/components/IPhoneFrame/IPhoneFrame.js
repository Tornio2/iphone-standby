import React from 'react';
import './IPhoneFrame.css';

const iPhoneFrame = ({ children }) => {

  return (
    <div className="iphone-container">
      <div className="iphone-frame">
        <div className="iphone-notch">
          <div className="iphone-speaker"></div>
          <div className="iphone-camera"></div>
        </div>
        <div className="iphone-screen">
          {children}
        </div>
        <div className="iphone-button"></div>
      </div>
    </div>
  );
};

export default iPhoneFrame;