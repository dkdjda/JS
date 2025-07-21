const car = {
  name: "페라리",
  price: 100000,
  color: "빨간색",
  changeColor: function (x) {
    this.color = x;
  },

  priceUp(money) {
    this.price = this.price + money;
  },

  changename(user) {
    this.name = user;
  },
};

car.changeColor("검은색");
window.console.log(car);

car.priceUp(2000000);

car.changename("람보");
