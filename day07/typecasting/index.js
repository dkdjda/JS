// 1. 문자에 배열로 바꾸기
//-1) split 함수 사용하기 "apple watch".split(" ")
//-2) 스프레드(...) 연산자 [..."apple watch"]

//2. 배열에서 문자로 바꾸기
//-1) join()

const quiz = window.prompt("영단어 입력");
[...quiz].map((x) =>
  x == "a" || x == "e" || x == "i" ? x.toLocaleUpperCase() : x.join("")
);

[...quiz].map((x) =>
  [..."awiou"].some((v) => v == x) ? x.toLocaleUpperCase() : x
);
