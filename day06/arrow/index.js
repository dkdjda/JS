//일반함수 (구분법)
function plus100(x) {
  return x + 100;
}

//화살표 함수 (신문법)

const plus100 = (x) => {
  return x + 100;
};

const quiz4 = (x) => {
  return x * 2;
};

const quiz5 = (x) => {
  return x - 500;
};

const quiz6 = (x, y) => {
  return x > y ? x : y;
};

const quiz7 = (letter) => {
  return letter.length;
};

const quiz8 = (letter2) => {
  return letter2.length > 10 ? "길이가 길어요" : "길이가 적당해요";
};

const quiz9 = (str) => {
  return `${str}을 하다니 럭키비키`;
};
const quiz10 = (x, y) => {
  return x ** y;
};

const quiz11 = (x, y) => {
  return x - y;
};

const quiz12 = (str) => {
  if (return str.includes("a") || str.includes("b") ){
    return
  };
};

const quiz13 = (x) => {

}

const quiz14 = (str,x) => {
    return str.slice(0,x+1)
}