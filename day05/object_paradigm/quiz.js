const baskinrabbins = {
  icecream: [
    { name: "딸기", price: 1500 },
    { name: "초코", price: 2000 },
    { name: "메론", price: 3000 },
  ],
  sales: 0,

  sellIcecream: function (x) {
    this.sales = this.sales + this.icecream[x].price;
  },
};

baskinrabbins.sellIcecream(1);
baskinrabbins.sellIcecream(2);
baskinrabbins.sellIcecream(2);

window.console.log(baskinrabbins.sales);
