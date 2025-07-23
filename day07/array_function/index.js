// const fn1 = (x) => x * 2;
// const fn2 = (x) => x ** 10;
// const fn3 = (x) => (x > 5 ? 1 : 2);
// const fn4 = (x) => (x % 2 ? "홀수" : "짝수");

// const arr = [1, 2, 3, 4, 5].map((x) => x * 2);

// 2. filter : 안에있는 요소들 걸러내기
//true 남기고 false 없앤다
// const fn1 = (x) => {
//   return true;
// };

// const b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => x <= 5);

// const fn2 = (x) => {
//   return true;
// };

// const a1 = [2, 4, 6, 8, 10].filter((x) => x % 4 == 0);

// const fn3 = (x) => {
//   return true;
// };

// const a2 = ["apple", "mango", "grape", "kiwi"].filter((x) => x.includes("a"));

// const fn4 = (x) => {
//   return true;
// };

// const a3 = [
//   { name: "더글로리", grnre: ["범죄", "사회고발", "피카레스크"] },
//   { name: "오징어게임", grnre: ["범죄", "스릴러", "블랙 코미디"] },
//   { name: "폭싹속았수다", grnre: ["로맨스", "드라마", "휴먼"] },
// ].filter((x) => {
//   x.grnre.includes("로맨스");
// });

// 3.some
// 요소 중에 해당 조건인 것이 하나 있니?
//모든 요소가 해당 조건에 모두 만족하니?
const a = [1, 2, 3, 4, 5].some((x) => x == 5); //true
const b = [1, 2, 3, 4, 5].every((x) => x == 5); //false
