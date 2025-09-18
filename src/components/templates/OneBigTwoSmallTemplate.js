import React from 'react';
import WidgetContainer from '../utils/WidgetContainer';
import './OneBigTwoSmall.css';

const OneBigTwoSmallTemplate = ({ isLandscape }) => {
  return (
    <div className={`one-big-two-small-template ${isLandscape ? 'landscape' : 'portrait'}`}>
      <div className="main-section">
        <WidgetContainer sectionId="main" size="big" />
      </div>
      <div className="secondary-sections">
        <div className="secondary-section top-section">
          <WidgetContainer sectionId="topRight" size="small" />
        </div>
        <div className="secondary-section bottom-section">
          <WidgetContainer sectionId="bottomRight" size="small" />
        </div>
      </div>
    </div>
  );
};

export default OneBigTwoSmallTemplate;