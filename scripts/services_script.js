// NAVIGATION
    document.getElementById('menu-icon').addEventListener('click', function() {
        var menu = document.getElementById('menu');
        menu.classList.toggle('show');
    });

    // Add click event listener to each menu item
    var menuItems = document.querySelectorAll('#menu a');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Close the menu
            var menu = document.getElementById('menu');
            menu.classList.remove('show');

            // Get the target section ID from the href attribute
            var targetId = event.currentTarget.getAttribute('href').substring(1);

            // Find the target section element
            var targetSection = document.getElementById(targetId);

            // Scroll to the corresponding section with smooth behavior
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Prevent the default behavior of the anchor link (avoid immediate jump)
            event.preventDefault();
        });
    });


//NAVIGATION END
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
    var headerImage = document.querySelector('header');
    var headerImageHeight = headerImage.offsetHeight;

    // Set the body padding based on the header image height
    document.body.style.paddingTop = headerImageHeight + 'px';
}


//GALLERY
var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
//var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
  if (e.target.classList.contains('active')) return;
  
  featured.style.backgroundImage = e.target.style.backgroundImage;
  
  for (var i = 0; i < galleryItems.length; i++) {
    if (galleryItems[i].classList.contains('active'))
      galleryItems[i].classList.remove('active');
  }
  
  e.target.classList.add('active');
}

function galleryWrapLeft() {
  var first = gallery.children[0];
  gallery.removeChild(first);
  gallery.style.left = -itemWidth + '%';
  gallery.appendChild(first);
  gallery.style.left = '0%';
}

function galleryWrapRight() {
  var last = gallery.children[gallery.children.length - 1];
  gallery.removeChild(last);
  gallery.insertBefore(last, gallery.children[0]);
  gallery.style.left = '-23%';
}

function moveLeft() {
  left = left || 0;

  leftInterval = setInterval(function() {
    gallery.style.left = left + '%';

    if (left > -itemWidth) {
      left -= scrollRate;
    } else {
      left = 0;
      galleryWrapLeft();
    }
  }, 1);
}

function moveRight() {
  //Make sure there is element to the leftd
  if (left > -itemWidth && left < 0) {
    left = left  - itemWidth;
    
    var last = gallery.children[gallery.children.length - 1];
    gallery.removeChild(last);
    gallery.style.left = left + '%';
    gallery.insertBefore(last, gallery.children[0]);  
  }
  
  left = left || 0;

  leftInterval = setInterval(function() {
    gallery.style.left = left + '%';

    if (left < 0) {
      left += scrollRate;
    } else {
      left = -itemWidth;
      galleryWrapRight();
    }
  }, 1);
}

function stopMovement() {
  clearInterval(leftInterval);
  clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveLeft);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveRight);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {

  
  var images = [
    'images/projects/img1.jpg',
    'images/projects/img2.jpg',
    'images/projects/img3.jpg',
    'images/projects/img4.jpg',
    'images/projects/img5.jpg',
    'images/projects/img6.jpg',
    'images/projects/img7.jpg',
    'images/projects/img8.jpg',
    'images/projects/img9.jpg',
    'images/projects/img10.jpg',
    'images/projects/img11.jpg',
    'images/projects/img12.jpg',

  ];
  
  //Set Initial Featured Image
  featured.style.backgroundImage = 'url(' + images[0] + ')';
  
  //Set Images for Gallery and Add Event Listeners
  for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
    galleryItems[i].addEventListener('click', selectItem);
  }
})();
