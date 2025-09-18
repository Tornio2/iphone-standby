import React, { useState, useRef } from 'react';
import WidgetPlaceholder from './WidgetPlaceholder';
import WidgetMenu from './WidgetMenu';
import Clock from '../widgets/Clock'; 
import './WidgetContainer.css';

// Mock widget components - these would be replaced with actual widgets
const Weather = () => <div className="mock-widget">Weather Widget</div>;
const Calendar = () => <div className="mock-widget">Calendar Widget</div>;
const Notes = () => <div className="mock-widget">Notes Widget</div>;
const Photos = () => <div className="mock-widget">Photos Widget</div>;

const WidgetContainer = ({ sectionId, size = "small" }) => {
  const [selectedWidget, setSelectedWidget] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showWidgetOptions, setShowWidgetOptions] = useState(false);
  const containerRef = useRef(null);
  const longPressTimer = useRef(null);
  const [longPressPosition, setLongPressPosition] = useState({ x: 0, y: 0 });

  // Get the appropriate widget component based on selection
  const getWidgetComponent = () => {
    switch (selectedWidget) {
      case 'clock':
        return <Clock size={size} />;
      case 'weather':
        return <Weather />;
      case 'calendar':
        return <Calendar />;
      case 'notes':
        return <Notes />;
      case 'photos':
        return <Photos />;
      default:
        return null;
    }
  };

  const handleWidgetSelect = (widgetId) => {
    setSelectedWidget(widgetId === 'none' ? null : widgetId);
    setShowMenu(false);
  };

  const handleLongPressStart = (e) => {
    if (!selectedWidget) return;
    
    longPressTimer.current = setTimeout(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setLongPressPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
        setShowWidgetOptions(true);
      }
    }, 500); // 500ms long press
  };

  const handleLongPressEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const handleRemoveWidget = () => {
    setSelectedWidget(null);
    setShowWidgetOptions(false);
  };

  const handleChangeWidget = () => {
    setShowMenu(true);
    setShowWidgetOptions(false);
  };

  return (
    <div className="widget-container" ref={containerRef}>
      {selectedWidget ? (
        <div 
          className="widget-content"
          onMouseDown={handleLongPressStart}
          onMouseUp={handleLongPressEnd}
          onMouseLeave={handleLongPressEnd}
          onTouchStart={handleLongPressStart}
          onTouchEnd={handleLongPressEnd}
        >
          {getWidgetComponent()}
        </div>
      ) : (
        <WidgetPlaceholder onClick={() => setShowMenu(true)} />
      )}

      {showMenu && (
        <WidgetMenu 
          onSelect={handleWidgetSelect} 
          onClose={() => setShowMenu(false)} 
        />
      )}

      {showWidgetOptions && (
        <div 
          className="widget-options-popup"
          style={{
            left: `${longPressPosition.x}px`,
            top: `${longPressPosition.y}px`
          }}
        >
          <div className="widget-option-item" onClick={handleChangeWidget}>
            Change Widget
          </div>
          <div className="widget-option-item" onClick={handleRemoveWidget}>
            Remove Widget
          </div>
          <div 
            className="widget-option-item cancel" 
            onClick={() => setShowWidgetOptions(false)}
          >
            Cancel
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetContainer;