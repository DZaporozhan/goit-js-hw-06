const refs = {
  inputElem: document.querySelector("#validation-input"),
};
const valid = Number(refs.inputElem.dataset.length);

refs.inputElem.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length !== valid) {
    refs.inputElem.classList.add("invalid");
    refs.inputElem.classList.remove("valid");
  } else {
    refs.inputElem.classList.add("valid");
    refs.inputElem.classList.remove("invalid");
  }
});
