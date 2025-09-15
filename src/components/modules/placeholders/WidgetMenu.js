import React from 'react';
import './WidgetMenu.css';

const WidgetMenu = ({ onSelect, onClose }) => {
  // List of available widgets
  const widgets = [
    { id: 'clock', name: 'Clock' },
    { id: 'weather', name: 'Weather' },
    { id: 'calendar', name: 'Calendar' },
    { id: 'notes', name: 'Notes' },
    { id: 'photos', name: 'Photos' },
    { id: 'none', name: 'No Widget' }
  ];

  return (
    <div className="widget-menu-overlay" onClick={onClose}>
      <div className="widget-menu" onClick={(e) => e.stopPropagation()}>
        <h3>Select Widget</h3>
        <div className="widget-options">
          {widgets.map((widget) => (
            <div 
              key={widget.id}
              className="widget-option"
              onClick={() => onSelect(widget.id)}
            >
              {widget.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetMenu;