const refs = {
  listCateg: document.querySelector("#categories"),
};
const categNameArr = refs.listCateg.querySelectorAll("h2");
const firstElem = refs.listCateg.firstElementChild;
const secondElem = firstElem.nextElementSibling;
const lastElem = refs.listCateg.lastElementChild;

console.log(`Number of categories: ${refs.listCateg.children.length}`);
function consolList() {
  categNameArr.forEach((elem) => {
    console.log(`Category: ${elem.innerText}`);
    switch (elem.innerText) {
      case "Animals":
        console.log(`Elements:${firstElem.lastElementChild.children.length}`);
        break;

      case "Products":
        console.log(`Elements:${secondElem.lastElementChild.children.length}`);
        break;

      case "Technologies":
        console.log(`Elements:${lastElem.lastElementChild.children.length}`);
        break;

      default:
        console.log("Invalid subscription type");
    }
  });
}

consolList();

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
