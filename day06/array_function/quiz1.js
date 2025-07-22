const letter = window.prompt("영어문장 입력");

const arr = letter.split(" ");

const fn1 = (x) => {
  return x.length;
};

const quiz1 = arr.map(fn1);
window.console.log(quiz1);
