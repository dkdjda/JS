const bus = [
  { name: "시내버스", price: 1200 },
  { name: "광역버스", price: 2000 },
  { name: "마을버스", price: 1000 },
];

const bus_1 = +window.prompt("버스 노선 입력") - 1;

const age = +window.prompt("나이를 입력해주세요");

const isfree = age <= 7 || 65 <= age;
const isYouth = 8 <= age && age <= 19;
const isadult = 20 <= age && age <= 64;

if (isfree) {
  window.console.log(`${bus[bus_1].name}요금 0원`);
} else if (isYouth) {
  window.console.log(`${bus[bus_1].name} 요금; ${bus[bus_1].price * 0.7}원`);
}
