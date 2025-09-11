import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle entering fullscreen
    function enterFullscreen() {
        const element = document.documentElement;
        
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { /* Safari */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE11 */
            element.msRequestFullscreen();
        }
        
        // Try to lock to landscape orientation - fix ESLint errors
        if (window.screen && window.screen.orientation && window.screen.orientation.lock) {
            window.screen.orientation.lock('landscape').catch(function(error) {
                console.log("Orientation lock failed: " + error);
            });
        } else if (window.orientation !== undefined) {
            // Handle iOS orientation through CSS instead
            console.log("Using CSS for orientation control");
        }
    }
    
    // Event listeners for user interaction
    document.addEventListener('click', enterFullscreen);
    document.addEventListener('touchstart', enterFullscreen);
    
    // Prevent default touch behaviors to avoid unwanted scrolling/zooming
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    // Handle iOS standalone mode detection
    if (window.navigator.standalone === true) {
        console.log("Running in standalone mode on iOS");
        // Set up any iOS-specific behaviors here
        document.body.classList.add('ios-standalone');
    }
});