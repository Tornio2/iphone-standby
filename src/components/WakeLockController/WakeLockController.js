import React, { useEffect, useState } from 'react';
import './WakeLockController.css';

const WakeLockController = () => {
  const [wakeLock, setWakeLock] = useState(null);
  const [isSupported, setIsSupported] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if the Screen Wake Lock API is supported
    if ('wakeLock' in navigator) {
      setIsSupported(true);
      // Try to activate wake lock automatically
      activateWakeLock();
    }
    
    // Cleanup function to release wake lock when component unmounts
    return () => {
      releaseWakeLock();
    };
  }, []);

  // Reacquire wake lock when page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isActive) {
        activateWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isActive]);

  const activateWakeLock = async () => {
    if (!isSupported) return;

    try {
      const lock = await navigator.wakeLock.request('screen');
      setWakeLock(lock);
      setIsActive(true);

      // When the wake lock is released for any reason
      lock.addEventListener('release', () => {
        setIsActive(false);
        setWakeLock(null);
      });
    } catch (error) {
      console.error('Failed to activate wake lock:', error);
    }
  };

  const releaseWakeLock = () => {
    if (wakeLock) {
      wakeLock.release();
      setWakeLock(null);
      setIsActive(false);
    }
  };

  const toggleWakeLock = () => {
    if (isActive) {
      releaseWakeLock();
    } else {
      activateWakeLock();
    }
  };

  return (
    <div className="wakelock-container">
      {!isSupported ? (
        <div className="wakelock-message error">
          Screen Wake Lock API is not supported in this browser.
        </div>
      ) : (
        <>
          <div className={`wakelock-status ${isActive ? 'active' : 'inactive'}`}>
            {isActive ? 'Screen will stay awake' : 'Screen may go to sleep'}
          </div>
          <button className={`wakelock-toggle ${isActive ? 'active' : ''}`} onClick={toggleWakeLock}>
            {isActive ? 'Disable Wake Lock' : 'Enable Wake Lock'}
          </button>
        </>
      )}
    </div>
  );
};

export default WakeLockController;