const americano = document.querySelector(".americano");
americano.addEventListener("click", () => {
  total.innerHTML =
    "총" + (parseInt(total.innerHTML.split(" ")[1]) + 5000) + "원";
});
const latte = document.querySelector(".latte");
latte.addEventListener("click", () => {
  total.innerHTML = +total.innerHTML + 6000;
});

const vanilla = document.querySelector(".vanilla");
vanilla.addEventListener("click", () => {
  total.innerHTML = +total.innerHTML + 6500;
});
const total = document.querySelector(".total");

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  total.innerHTML = "총 0원";
});
