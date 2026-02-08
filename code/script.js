const openmodal = document.getElementById("open-modal");
const modaloverlay = document.getElementsByClassName("modal-overlay")[0];
const navmodal = document.getElementsByClassName("nav-modal")[0];
const nav = document.getElementById("noShadowNav");
const menuicon = document.getElementsByClassName("menu-icon")[0];

// One function to rule them all
function toggleMenu() {
  const isOpen = menuicon.classList.contains("close");

  if (!isOpen) {
    // OPENING
    navmodal.classList.remove("no-display");
    modaloverlay.classList.add("active");
    modaloverlay.style.pointerEvents = "auto"; // Unlock overlay
    nav.classList.add("no-shadow");
    menuicon.classList.add("close");
  } else {
    // CLOSING
    navmodal.classList.add("no-display");
    modaloverlay.classList.remove("active");
    modaloverlay.style.pointerEvents = "none"; // Lock overlay
    nav.classList.remove("no-shadow");
    menuicon.classList.remove("close");
  }
}

// Attach the toggle to the button
openmodal.addEventListener("click", toggleMenu);

// Close if clicking the overlay background
window.onclick = function (event) {
  if (event.target == modaloverlay) {
    toggleMenu();
  }
};

const navLinks = document.querySelectorAll(".nav-links-list a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("click", (e) => {
    // If the radio was already checked before this click, uncheck it
    if (radio.wasChecked) {
      radio.checked = false;
      radio.wasChecked = false;
    } else {
      // Mark this one as checked and reset others in the same group
      document
        .querySelectorAll(`input[name="${radio.name}"]`)
        .forEach((r) => (r.wasChecked = false));
      radio.wasChecked = true;
    }
  });
  window.onload = () => {
    if (radio.wasChecked) {
      radio.checked = false;
      radio.wasChecked = false;
    } else {
      // Mark this one as checked and reset others in the same group
      document
        .querySelectorAll(`input[name="${radio.name}"]`)
        .forEach((r) => (r.wasChecked = false));
      radio.wasChecked = true;
    }
  };
});
