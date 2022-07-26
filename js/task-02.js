const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refs = {
  listParent: document.querySelector("#ingredients"),
};

const listTittle = document.createElement("h2");
listTittle.textContent = "Ingredients";
listTittle.classList.add(".tittle");

refs.listParent.prepend(listTittle);
const arr = [];
ingredients.map((elem) => {
  const listElems = document.createElement("li");
  listElems.textContent = `${elem}`;
  listElems.classList.add(".item");
  return arr.push(listElems);
});

refs.listParent.append(...arr);
