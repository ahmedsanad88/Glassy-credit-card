const card = document.querySelector(".card__content");
const form = document.querySelector(".form__content");

document.addEventListener("mousemove", (e) => {
  if (!form.classList.contains("show__form")) {
    handleCardRotation(e, card);
  }
});

function handleCardRotation(event, element) {
  // Get the mouse position
  const x = event.clientX;
  const y = event.clientY;

  // Get the middle of the screen
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  /**
   * Calculate the offset for both axes and you can play with the last number
    according to the softness of the rotation required - the lower will be softer
   */
  const offsetX = ((x - middleX) / middleX) * 22.5;
  const offsetY = ((y - middleY) / middleY) * 22.5;
  // Get a general rotation for rotating background
  const TotalOffset =
    ((x + y - (middleX + middleY)) / (middleX + middleY)) * 360;

  // Setting all the dynamics properties.
  document.documentElement.style.setProperty("--rotateCircleX", offsetY + "px");
  document.documentElement.style.setProperty(
    "--rotateCircleY",
    -1 * offsetX + "px"
  );
  element.style.setProperty("--rotateX", -1 * offsetY + "deg");
  element.style.setProperty("--rotateY", offsetX + "deg");
  document.documentElement.style.setProperty(
    "--rotateBg",
    -1 * TotalOffset + "deg"
  );
}

// card & form animation
card.addEventListener("click", () => {
  form.classList.toggle("show__form");
});

// form submit
document.getElementById("formData").addEventListener("submit", (e) => {
  e.preventDefault();
});
