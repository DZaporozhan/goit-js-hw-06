const refs = {
  listCateg: document.querySelector("#categories"),
};
const categNameArr = refs.listCateg.querySelectorAll("h2");
const firstElem = refs.listCateg.firstElementChild;
const secondElem = firstElem.nextElementSibling;
const lastElem = refs.listCateg.lastElementChild;

console.log(`Number of categories: ${refs.listCateg.children.length}`);
console.log(`Category: ${categNameArr[0].innerText}`);
console.log(`Elements:${firstElem.lastElementChild.children.length}`);
console.log(`Category: ${categNameArr[1].innerText}`);
console.log(`Elements:${secondElem.lastElementChild.children.length}`);
console.log(`Category: ${categNameArr[2].innerText}`);
console.log(`Elements:${lastElem.lastElementChild.children.length}`);

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
