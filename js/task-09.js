function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  colorChangeBtn: document.querySelector(".change-color"),
  colorValueText: document.querySelector(".color"),
};
const onColorChangClick = (e) => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorValueText.innerHTML = getRandomHexColor();
};
refs.colorChangeBtn.addEventListener("click", onColorChangClick);
