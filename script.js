document.addEventListener("DOMContentLoaded", function() {
  var popupOverlay = document.getElementById("popup-overlay");
  var popBox = document.getElementById("pop-box");
  var searchBox = document.getElementById("search-box");
  var searchBoxPopup = document.getElementById("search-box-popup");
  var cancelBtn = document.getElementById("cancelbtn");

  function showPopup() {
    popupOverlay.style.display = "block";
    popBox.style.display = "block";
  }

  function hidePopup() {
    popupOverlay.style.display = "none";
    popBox.style.display = "none";
  }

  searchBox.addEventListener("focus", showPopup);
  searchBoxPopup.addEventListener("focus", showPopup);

  cancelBtn.addEventListener("click", hidePopup);

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      hidePopup();
    }
  });

  popupOverlay.addEventListener("click", function(event) {
    if (event.target === popupOverlay) {
      hidePopup();
    }
  });
});

// Initialize AOS with custom options
AOS.init({
  offset: 200, // Adjust the offset value as needed
});



document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu');
  const navbarNav = document.getElementById('navbarNav');

  menuButton.addEventListener('click', function() {
    navbarNav.classList.toggle('show');

    // Add transition class dynamically to #navbarNav
    if (navbarNav.classList.contains('show')) {
      navbarNav.style.transition = 'transform 0.8s ease'; // Apply transition only when showing
    } else {
      navbarNav.style.transition = 'none'; // Remove transition when hiding
    }
  });
});
