import React from 'react';
import './OrientationToggle.css';

const OrientationToggle = ({ isLandscape, onToggle }) => {
  return (
    <button className="orientation-toggle" onClick={onToggle}>
      {isLandscape ? 'Switch to Portrait' : 'Switch to Landscape'}
    </button>
  );
};

export default OrientationToggle;