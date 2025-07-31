// const btn = document.querySelector(".hi");

// btn.addEventListener("mouseenter", (x) => {
//   console.log(x.target.innerHTML);
// });

// const input = document.querySelector("input");
// input.addEventListener("input", (x) => {
//   console.log(x.target.value);
// });
// const span = document.querySelector("span");
// const input = document.querySelector("input");
// input.addEventListener("input", (x) => {
//   span.innerHTML = x.target.value.length;
// });

const span = document.querySelector("span");
const input = document.querySelector("input");
input.addEventListener("input",(x)=>
const length = x.target.value.length
span.innerHTML)

const btn = document.querySelector("button");
btn.addEventListener("click", (x) => {
  x.target.innerHTML = x.target.innerHTML == "😎" ? "😋" : "😎";
  input.type = input.type == "text" ? "password" : "text";
});
