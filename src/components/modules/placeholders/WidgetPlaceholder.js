import React, { useState } from 'react';
import './WidgetPlaceholder.css';

const WidgetPlaceholder = ({ onSelectWidget }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handlePlusClick = () => {
    setShowMenu(!showMenu);
  };

  const handleSelectWidget = (widgetType) => {
    if (onSelectWidget) {
      onSelectWidget(widgetType);
    }
    setShowMenu(false);
  };

  return (
    <div className="widget-placeholder">
      {!showMenu ? (
        <button className="plus-button" onClick={handlePlusClick}>
          <span className="plus-icon">+</span>
        </button>
      ) : (
        <div className="widget-menu">
          <div className="widget-menu-header">
            <h3>Select a Widget</h3>
            <button className="close-button" onClick={handlePlusClick}>×</button>
          </div>
          <div className="widget-options">
            <div className="widget-option" onClick={() => handleSelectWidget('clock')}>
              <span className="widget-icon">⏰</span>
              <span className="widget-name">Clock</span>
            </div>
            <div className="widget-option" onClick={() => handleSelectWidget('weather')}>
              <span className="widget-icon">☀️</span>
              <span className="widget-name">Weather</span>
            </div>
            <div className="widget-option" onClick={() => handleSelectWidget('calendar')}>
              <span className="widget-icon">📅</span>
              <span className="widget-name">Calendar</span>
            </div>
            <div className="widget-option" onClick={() => handleSelectWidget('music')}>
              <span className="widget-icon">🎵</span>
              <span className="widget-name">Music</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetPlaceholder;