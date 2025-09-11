document.addEventListener('DOMContentLoaded', function() {
    // Handle fullscreen and orientation lock with a single tap
    function setupFullscreen() {
        const element = document.documentElement;
        
        // Request fullscreen
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        
        // Try to lock to landscape orientation
        try {
            if (window.screen && window.screen.orientation) {
                window.screen.orientation.lock('landscape').catch(function(error) {
                    console.log("Orientation lock failed: " + error);
                });
            }
        } catch (e) {
            console.log("Screen orientation API not supported");
        }
    }
    
    // Set up event listeners for fullscreen
    document.addEventListener('click', setupFullscreen);
    document.addEventListener('touchstart', setupFullscreen);
    
    // Prevent default touch behaviors
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    // Prevent scrolling with keyboard
    document.addEventListener('keydown', function(e) {
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
});