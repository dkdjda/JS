//document [html 타입]
//element [태그타입]

//1.querySelector / querySelectorAll : 찾아주세요

// const a = document.body.querySelector(".hi");
// console.log(a);

// const b = document.body.querySelector(".monday");
// console.log(b);

// const c = document.body.querySelector(".feeling");
// console.log(c);

// const a = document.body.querySelector(".hi");
// a.innerhtml = "수고하세요";

// const b = document.body.querySelector(".text");
// b.innerhtml = "내일 화요일";

// const time = document.body.querySelector(".time");
// time.innerhtml = new Date().toLocaleTimeString();

const month = document.body.querySelector(".month");
month.innerHTML = new Date().getMonth() + 1 + "월";

const date = document.body.querySelector(".date");
date.innerHTML = new Date().getDate() + "일";

const day = document.body.querySelector(".day");
const daylist = ["일", "월", "화", "수", "목", "금", "토"];
day.innerHTML = daylist[new Date().getDay()] + "요일";

const hour = document.body.querySelector(".hour");
hour.innerHTML = new Date().gethours() + "시";

const minute = document.body.querySelector(".minute");
minute.innerHTML = new Date().getMinutes() + "분";

const second = document.body.querySelector(".second");
second.innerHTML = new Date().getSeconds() + "초";
