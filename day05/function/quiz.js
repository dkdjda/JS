function squrare(x) {
  return x ** 2;
}

function delicious(food) {
  return x`${food}는 맛있다`;
}

function isOddorEven(x) {
  return x % 2 ? "홀수" : "짝수";
}

function threelist(x) {
  return [x * 1, x * 2, x * 3];
}

const a = squrare(20);
window.console.log(`첫번째 결과:${a}`);

const b = delicious("돈까스");
window.console.log(`첫번째 결과:${b}`);

const c = isOddorEven(13);
window.console.log(`첫번째 결과:${c}`);

const d = threelist(20);
window.console.log(`첫번째 결과:${d}`);
