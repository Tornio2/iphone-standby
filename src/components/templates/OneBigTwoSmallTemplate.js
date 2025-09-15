import React from 'react';
import './OneBigTwoSmall.css';
import WidgetContainer from '../modules/placeholders/WidgetContainer';

const OneBigTwoSmallTemplate = ({ isLandscape }) => {
  return (
    <div className={`one-big-two-small-template ${isLandscape ? 'landscape' : 'portrait'}`}>
      <div className="main-section">
        <WidgetContainer sectionId="main" />
      </div>
      <div className="secondary-sections">
        <div className="secondary-section top-section">
          <WidgetContainer sectionId="topRight" />
        </div>
        <div className="secondary-section bottom-section">
          <WidgetContainer sectionId="bottomRight" />
        </div>
      </div>
    </div>
  );
};

export default OneBigTwoSmallTemplate;