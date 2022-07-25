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
const listElem1 = document.createElement("li");
listElem1.textContent = `${ingredients[0]}`;
listElem1.classList.add(".item");
const listElem2 = document.createElement("li");
listElem2.textContent = `${ingredients[1]}`;
listElem2.classList.add(".item");
const listElem3 = document.createElement("li");
listElem3.textContent = `${ingredients[2]}`;
listElem3.classList.add(".item");
const listElem4 = document.createElement("li");
listElem4.textContent = `${ingredients[3]}`;
listElem4.classList.add(".item");
const listElem5 = document.createElement("li");
listElem5.textContent = `${ingredients[4]}`;
listElem5.classList.add(".item");
const listElem6 = document.createElement("li");
listElem6.textContent = `${ingredients[5]}`;
listElem6.classList.add(".item");

refs.listParent.prepend(listTittle);
refs.listParent.append(
  listElem1,
  listElem2,
  listElem3,
  listElem4,
  listElem5,
  listElem6
);
