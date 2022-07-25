function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controls: document.querySelector("#controls"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxInner: document.querySelector("#boxes"),
};

const amountInp = refs.controls.firstElementChild;
let amount = amountInp.addEventListener("input", (e) => {
  return e.currentTarget.value;
});

const createBoxes = (amount) => {
  let sizeArr = [];
  const minWidth = 30;
  const minHeigth = 30;
  for (let i = 0; i < amount; i++) {
    sizeArr.push({
      width: minWidth + 10 * i,
      heigth: minHeigth + 10 * i,
    });
  }
  const newBox = sizeArr
    .map(
      (box) =>
        `<div style="width:${box.width}px; height:${
          box.heigth
        }px; background-color:${getRandomHexColor()}"></div>`
    )
    .join("");
  return (refs.boxInner.innerHTML = newBox);
};

refs.createBtn.addEventListener("click", createBoxes);
