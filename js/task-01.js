const refs = {
  listCateg: document.querySelector("#categories"),
};

const arr = [...refs.listCateg.children];
console.log(`Number of categories:${arr.length}`);

arr.map((elem) => {
  console.log(`Category:${elem.children[0].textContent}`);
  console.log(`Elements:${elem.children[1].children.length}`);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
