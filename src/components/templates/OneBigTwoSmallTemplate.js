import React from 'react';
import './OneBigTwoSmall.css';

const OneBigTwoSmallTemplate = ({ isLandscape, mainContent, topRightContent, bottomRightContent }) => {
  return (
    <div className={`one-big-two-small-template ${isLandscape ? 'landscape' : 'portrait'}`}>
      <div className="main-section">
        {mainContent || <div className="placeholder-content">Main Section</div>}
      </div>
      <div className="secondary-sections">
        <div className="secondary-section top-section">
          {topRightContent || <div className="placeholder-content">Secondary Section 1</div>}
        </div>
        <div className="secondary-section bottom-section">
          {bottomRightContent || <div className="placeholder-content">Secondary Section 2</div>}
        </div>
      </div>
    </div>
  );
};

export default OneBigTwoSmallTemplate;


