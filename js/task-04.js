const refs = {
  value: document.querySelector("#value"),
  decrBtn: document.querySelector('[data-action="decrement"]'),
  incrBtn: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

refs.decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.innerHTML = `${counterValue}`;
});

refs.incrBtn.addEventListener("click", () => {
  counterValue += 1;
  value.innerHTML = `${counterValue}`;
});
