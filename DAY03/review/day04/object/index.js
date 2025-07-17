//object 타입
//key-value
//key는 중복안됨 - 문자,숫자
//value는 중복 됨 -아무타입가능

const americano = {
  name: "아메리카노",
  price: 2000,
  isice: true,
  hasSoht: true,
};

window.console.log(americano.name); //아메리카노
window.console.log(americano.price); //2000
window.console.log(americano.hasSoht); //true

//bracket 연산자
window.console.log(americano["name"]); //아메리카노
window.console.log(americano["price"]); //2000
window.console.log(americano[hasSoht]); //true
