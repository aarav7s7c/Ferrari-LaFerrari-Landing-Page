const openmodal = document.getElementById("open-modal");
const modaloverlay = document.querySelector(".modal-overlay");
const navmodal = document.querySelector(".nav-modal");
const nav = document.getElementById("noShadowNav");
const menuicon = document.querySelector(".menu-icon");

function setMenuState(shouldOpen) {
  navmodal.classList.toggle("no-display", !shouldOpen);
  modaloverlay.classList.toggle("active", shouldOpen);
  nav.classList.toggle("no-shadow", shouldOpen);
  menuicon.classList.toggle("close", shouldOpen);
}

function toggleMenu() {
  const isOpen = menuicon.classList.contains("close");
  setMenuState(!isOpen);
}

if (openmodal && modaloverlay && navmodal && nav && menuicon) {
  openmodal.addEventListener("click", toggleMenu);
  modaloverlay.addEventListener("click", (event) => {
    if (event.target === modaloverlay) setMenuState(false);
  });

  // One handler for nav close, instead of one listener per nav link.
  navmodal.addEventListener("click", (event) => {
    const clickedLink = event.target.closest(".nav-links-list a");
    if (clickedLink) setMenuState(false);
  });
}

const radios = document.querySelectorAll('input[type="radio"]');
if (radios.length > 0) {
  // Cache radio groups once. This avoids querySelectorAll on every click.
  const radioGroupsByName = new Map();
  radios.forEach((radio) => {
    radio.dataset.wasChecked = String(radio.checked);
    if (!radioGroupsByName.has(radio.name)) radioGroupsByName.set(radio.name, []);
    radioGroupsByName.get(radio.name).push(radio);
  });

  // One delegated click handler instead of one per radio input.
  document.addEventListener("click", (event) => {
    const radio = event.target.closest('input[type="radio"]');
    if (!radio) return;

    const group = radioGroupsByName.get(radio.name);
    if (!group) return;

    if (radio.dataset.wasChecked === "true") {
      radio.checked = false;
      radio.dataset.wasChecked = "false";
      return;
    }

    for (const item of group) item.dataset.wasChecked = "false";
    radio.dataset.wasChecked = "true";
  });
}

const nonCriticalImages = document.querySelectorAll(
  ".benefits img, .reviews img, .lastCTA img",
);
nonCriticalImages.forEach((image) => {
  image.loading = "lazy";
  image.decoding = "async";
});