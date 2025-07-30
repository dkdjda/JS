const num = document.querySelector(".num");

const minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  num.style.color = +num.innerHTML < 9 ? "black" : "blue";
  num.innerHTML = nownumber - 1;
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  const nownumber = +num.innerHTML;
  num.style.color = +num.innerHTML < 9 ? "black" : "blue";

  num.innerHTML = +num.innerHTML + 1;
});
