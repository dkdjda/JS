const minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML - 1;
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML + 1;
});
const num = document.querySelector(".num");

const minus_1 = document.querySelector(".minus_1");
minus_1.addEventListener("click", () => {
  num_1.innerHTML = +num_1.innerHTML - 1;
});

const plus_1 = document.querySelector(".plus_1");
plus_1.addEventListener("click", () => {
  num_1.innerHTML = +num_1.innerHTML + 1;
});
const num_1 = document.querySelector(".num_1");

const price = document.querySelector(".price");

const numprice = document.querySelector(".numprice");
numprice.innerHTML(price.innerHTML((numprice.innerHTML = +num.innerHTML + +num_1.innerHTML));)
const all = document.querySelector(".all");
