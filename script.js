
function openMoreAboutFeasibility() {
    // Specify the relative or absolute URL of the target page
    var targetPageURL = 'feasibility.html';

    // Navigate to the target page
    window.location.href = targetPageURL;
}

function openMoreAboutDesign() {
    // Specify the relative or absolute URL of the target page
    var targetPageURL = 'design.html';

    // Navigate to the target page
    window.location.href = targetPageURL;
}

function openMoreAboutConstruction() {
    // Specify the relative or absolute URL of the target page
    var targetPageURL = 'construction.html';

    // Navigate to the target page
    window.location.href = targetPageURL;
}
function openHome() {
    // Specify the relative or absolute URL of the target page
    var targetPageURL = 'index.html';

    // Navigate to the target page
    window.location.href = targetPageURL;
}


document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded
    setBodyPadding();

    // Listen for window resize events
    window.addEventListener("resize", setBodyPadding);
});

function setBodyPadding() {
    // Get the height of the header image
    var headerImage = document.querySelector('header img');
    var headerImageHeight = headerImage.offsetHeight;

    // Set the body padding based on the header image height
    document.body.style.paddingTop = headerImageHeight + 'px';
}



