const quiz1 = (x) => {
  return x * 2 + 10;
};

const test1 = [3, 6, 9, 12, 15].map(quiz1);
console.log(test1);

const quiz2 = (x) => {
  return x % 2 ? x * 2 : x * 3;
};

const test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(quiz2);
console.log(test2);

const quiz3 = (x) => {
  return x < 5 ? 1 : 2;
};

const test3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(quiz3);
console.log(test3);

const quiz4 = (x) => {
  x % 3 == 0 ? "❤" : "😊";
};
const test4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(quiz4);

const quiz5 = (x) => {
  return x.length;
};
const test5 = ["apple", "mango", "juice", "kiwi"].map(quiz5);
console.log(test5);
