const refs = {
  inputSize: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.inputSize.addEventListener("input", (event) => {
  refs.text.style.fontSize = `${event.target.value}px`;
});
