const pizza_list = [
  { name: "페퍼로니피자", price: 15000 },
  { name: "치즈피자", price: 13000 },
  { name: "불고기피자", price: 13000 },
];
const pizza = +window.prompt("피자종류(1~3)") - 1;
const amount = +window.prompt("구매할 피자 개수");
const money = +window.prompt("투입 금액");

if (money > pizza_list[pizza].price * amount) {
  window.console.log(
    `${pizza_list[pizza].name}${amount}개,잔돈${
      money - pizza_list[pizza].price * amount
    }원`
  );
} else {
  window.console.log("잔액이 부족힙니다");
}
