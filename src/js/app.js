const card = document.querySelector(".card__content");
const form = document.querySelector(".form__content");

document.addEventListener("mousemove", (e) => {
  handleCardRotation(e, card);
});

function handleCardRotation(event, element) {
  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 22.5;
  const offsetY = ((y - middleY) / middleY) * 22.5;

  document.documentElement.style.setProperty("--rotateCircleX", offsetY + "px");
  document.documentElement.style.setProperty(
    "--rotateCircleY",
    -1 * offsetX + "px"
  );
  card.style.setProperty("--rotateX", -1 * offsetY + "deg");
  card.style.setProperty("--rotateY", offsetX + "deg");
}

// card & form animation
card.addEventListener("click", () => {
  form.classList.toggle("show__form");
});

// form submit

document.getElementById("formData").addEventListener("submit", (e) => {
  e.preventDefault();
});
