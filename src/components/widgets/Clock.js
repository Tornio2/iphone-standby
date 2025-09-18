import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = ({ size = "small" }) => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timerID);
    };
  }, []);
  
  // Digital clock display
  const renderDigitalClock = () => {
    return (
      <div className="digital-clock">
        <div className="time">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    );
  };
  
  // Analog clock display
  const renderAnalogClock = () => {
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    const hourDegrees = (hours * 30) + (minutes * 0.5); // 30 degrees per hour + adjustment for minutes
    const minuteDegrees = minutes * 6; // 6 degrees per minute
    const secondDegrees = seconds * 6; // 6 degrees per second
    
    return (
      <div className="analog-clock">
        <div className="clock-face">
          <div className="clock-hour-marks">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="hour-mark" style={{ transform: `rotate(${i * 30}deg)` }}>
                <div className="mark"></div>
              </div>
            ))}
          </div>
          <div 
            className="hour-hand" 
            style={{ transform: `rotate(${hourDegrees}deg)` }}
          ></div>
          <div 
            className="minute-hand" 
            style={{ transform: `rotate(${minuteDegrees}deg)` }}
          ></div>
          <div 
            className="second-hand" 
            style={{ transform: `rotate(${secondDegrees}deg)` }}
          ></div>
          <div className="clock-center"></div>
        </div>
        <div className="digital-time">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    );
  };
  
  return (
    <div className={`clock-widget ${size}`}>
      {size === "big" ? renderAnalogClock() : renderDigitalClock()}
    </div>
  );
};

export default Clock;