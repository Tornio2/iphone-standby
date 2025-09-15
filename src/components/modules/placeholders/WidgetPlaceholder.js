import React from 'react';
import './WidgetPlaceholder.css';

const WidgetPlaceholder = ({ onClick }) => {
  return (
    <div className="widget-placeholder" onClick={onClick}>
      <div className="plus-button">
        <span>+</span>
      </div>
    </div>
  );
};

export default WidgetPlaceholder;