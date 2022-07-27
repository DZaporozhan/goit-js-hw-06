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
  console.log(e.target.value);
  return (inpVal = e.target.value);
});

function createStyleOptions() {
  let qrt = inpVal;
  let styleArr = [];
  const minWidth = 30;
  const minHeigth = 30;
  for (let i = 0; i < qrt; i++) {
    styleArr.push({
      width: minWidth + 10 * i,
      heigth: minHeigth + 10 * i,
      color: getRandomHexColor(),
    });
  }
  return styleArr;
}

function createBoxes(amount) {
  amount = createStyleOptions();
  const newBox = amount
    .map(
      (box) =>
        `<div style="width:${box.width}px; height:${box.heigth}px; background-color:${box.color}"></div>`
    )
    .join("");
  return (refs.boxInner.innerHTML = newBox);
}

const destroyBoxes = () => {
  return (refs.boxInner.innerHTML = "");
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);
