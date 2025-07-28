// const user_tag = prompt("바라는 태그 입력");
// const user_bg = prompt("바라는 배경색 입력");
// const user_contents = prompt("바라는 콘텐츠 입력");

// const tag = document.createElement("user_");
// tag.innerhtml = user_contents;
// tag.style.backgroundColor = user_bg;

// document.body.appendChild(tag);

const colorlist = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
];
const user_food = prompt("좋아하는 음식들 입력").split(" ");

user_food.forEach((x, i) => {
  const btn = document.creatElement(`button`);
  btn.innerhtml = x;
  btn.style.color = colorlist[i % 7];
  document.body.appendChild(btn);
});
