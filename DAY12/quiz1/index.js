const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const id = document.querySelector(".id");
id.addEventListener("input", (x) => {
  const length = x.target.length > 20 ? "green" : "gray";
});
const pass = document.querySelector(".pass");
const btn = document.querySelector("button");
