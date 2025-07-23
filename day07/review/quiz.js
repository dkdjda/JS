const quiz = (x) => {
  return x ** 2;
};

const fn1 = [1, 2, 3, 4].map(quiz);
console.log(fn1);

const quiz1 = (x) => {
  return x.toLocaleUpperCase();
};

const fn2 = ["hong", "kim", "lee"].map(quiz1);

console.log(fn2);

const quiz2 = (x) => {
  return x < 60 ? "불합격" : "합격";
};

const fn3 = [85, 42, 77].map(quiz2);
console.log(fn3);

const quiz3 = (x) => {
  return x * 0.8;
};

const fn4 = [10000, 20000, 15000].map(quiz3);
console.log(fn4);

const quiz4 = (x) => {
  return x.name;
};

const fn5 = [
  { name: `홍길동`, age: 16 },
  { name: `김철수`, age: 17 },
].map(quiz4);
console.log(fn5);
