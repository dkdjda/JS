const starbucks = [
  {
    name: "아메리카노",
    price: 4500,
    shots: 2,
    ingredients: ["water", "caffein"],
  },
  {
    name: "라떼",
    price: 5500,
    shots: 2,
    ingredients: ["water", "caffein", "milk"],
  },
  {
    name: "돌체라떼",
    price: 6500,
    shots: 2,
    ingredients: ["water", "caffein", "milk", "condensed milk"],
  },
  {
    name: "바닐라 크림",
    price: 5500,
    shots: 2,
    ingredients: ["water", "caffein", "vanilla"],
  },
  {
    name: "카페 모카",
    price: 6000,
    shots: 2,
    ingredients: ["milk", "caffein", "chocolate", "water"],
  },
];

const fn6 = (x) => {
  x.price = x.price * 0.8;
  return x;
};
const answer = starbucks.map(fn6);
console.log(answer);

const fn7 = (x) => {
  x.name = x.name.includes("라떼") ? "재고없음" : x.name;
  return x;
};

const answer2 = starbucks.map(fn9);

const fn8 = (x) => {
  x.ingredients.map(fn9);
  return x;
};

const fn9 = (y) => {
  return y == "caffeine" ? " decaffeine " : y;
};
