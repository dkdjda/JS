// const a = 1; // 숫자 - Number
// const b = "1"; // 문자 - String

// const a1 = Number("100") + 20; // 120
// const a2 = Number("1004") + Number(10); //1014

// const b1 = String(100) + "10"; //10010
// const b2 = String(13) + "14"; //1314

// window.console.iog(`결과${a1}`);
// window.console.iog(`결과${a2}`);
// window.console.iog(`결과${b1}`);
// window.console.iog(`결과${b2}`);

const first = window.prompt("첫번째 숫자 입력해주세요");
const second = window.prompt("두번째 숫자 입력해주세요");

const result = Number(first) + Number(second);

window.alert(`${first}+${second}=${result}`);

const age = window.prompt("나이를 입력하세요");

const year = 2026 - Number(age);
window.alert(`귀하의 태어난 년도는 ${year} 입니다`);
