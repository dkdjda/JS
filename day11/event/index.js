const button = document.querySelector("button");

//button.addEventListener("이벤트종류","무엇을")

button.addEventListener("click", () => {
  alert("ㅅㄱ");
});

const add = document.querySelector(".add");

add.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerHTML = "아메리카노";
});
