let mouseOverCount = 0;
let lastMouseOverTime = Date.now();
const logo = document.getElementById('logo');
const beepSound = document.getElementById('beep-sound');

document.body.addEventListener('click', function() {
    document.body.classList.add('user-interacted');
});

logo.addEventListener('mouseover', function() {
    const now = Date.now();
    
    if (now - lastMouseOverTime < 1000) { // If mouseover within 1 second
        mouseOverCount++;
    } else {
        mouseOverCount = 1;
    }
    
    lastMouseOverTime = now;

    if (mouseOverCount > 5) { // If mouseover more than 5 times quickly
        this.src = 'angry.png'; // Change to the angry logo image
        if (document.body.classList.contains('user-interacted')) {
            beepSound.play(); // Play the beep sound if user has interacted with the page
        }
    } else {
        this.src = 'wink.png'; // Change to the winking logo image
    }
});

logo.addEventListener('mouseout', function() {
    this.src = 'peachlogo.png'; // Change back to the normal logo image
});
