function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controls: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxInner: document.querySelector("#boxes"),
};
let inpVal = 0;
controls.addEventListener("input", (e) => {
  return (inpVal = e.target.value);
});

const createBoxes = (amount) => {
  amount = inpVal;
  let items = [];
  const minSize = 30;
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const adgeSize = minSize + 10 * i;
    const item = document.createElement("div");
    item.style.backgroundColor = color;
    item.style.width = `${adgeSize}px`;
    item.style.height = `${adgeSize}px`;
    items.push(item);
  }
  refs.boxInner.append(...items);
};

const destroyBoxes = () => {
  return (refs.boxInner.innerHTML = "");
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);
