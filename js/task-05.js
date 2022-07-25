const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  event.currentTarget.value === ""
    ? (refs.output.innerHTML = "Anonymous")
    : (refs.output.innerHTML = event.currentTarget.value);
});
