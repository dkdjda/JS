const subway = [
  { name: 일반노선, price: 1250 },
  { name: 급행노선, price: 2000 },
  { name: 관광노선, price: 3000 },
];

const subway1 = +window.prompt(`노선입력`) - 1;
const age = +window.prompt(`나이입력`);
const abc = +window.prompt(`탑승구간입력`);

const isfree = age <= 7 || 65 <= age;
const isYouth = 8 <= age && age <= 18;

const extra_charge = abc + 10;
