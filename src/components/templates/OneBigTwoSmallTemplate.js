import React, { useState } from 'react';
import './OneBigTwoSmall.css';
import WidgetPlaceholder from '../modules/placeholders/WidgetPlaceholder';
import Clock from '../modules/Clock';

const OneBigTwoSmallTemplate = ({ isLandscape }) => {
  const [mainWidget, setMainWidget] = useState(null);
  const [topRightWidget, setTopRightWidget] = useState(null);
  const [bottomRightWidget, setBottomRightWidget] = useState(null);

  const handleSelectWidget = (section, widgetType) => {
    switch (section) {
      case 'main':
        setMainWidget(widgetType);
        break;
      case 'topRight':
        setTopRightWidget(widgetType);
        break;
      case 'bottomRight':
        setBottomRightWidget(widgetType);
        break;
      default:
        break;
    }
  };

  const renderWidget = (section, widgetType) => {
    if (!widgetType) {
      return <WidgetPlaceholder onSelectWidget={(type) => handleSelectWidget(section, type)} />;
    }
    
    // Render the selected widget
    switch (widgetType) {
      case 'clock':
        return <Clock />;
      case 'weather':
        return <div className="placeholder-content">Weather Widget (Coming Soon)</div>;
      case 'calendar':
        return <div className="placeholder-content">Calendar Widget (Coming Soon)</div>;
      case 'music':
        return <div className="placeholder-content">Music Widget (Coming Soon)</div>;
      default:
        return <div className="placeholder-content">Unknown Widget</div>;
    }
  };

  return (
    <div className={`one-big-two-small-template ${isLandscape ? 'landscape' : 'portrait'}`}>
      <div className="main-section">
        {renderWidget('main', mainWidget)}
      </div>
      <div className="secondary-sections">
        <div className="secondary-section top-section">
          {renderWidget('topRight', topRightWidget)}
        </div>
        <div className="secondary-section bottom-section">
          {renderWidget('bottomRight', bottomRightWidget)}
        </div>
      </div>
    </div>
  );
};

export default OneBigTwoSmallTemplate;