const box = document.querySelector(".box");

const clothes = [
  {
    src: "photo-1730035146844-bd61176d8991.jpg",
    brand: "무신사 스탠다드",
    name: "플렉스 포스",
    price: "93,420원",
  },
  {
    src: "photo-1730035146844-bd61176d8991.jpg",
    brand: "무신사 스탠다드",
    name: "플렉스 포스",
    price: "93,420원",
  },
  {
    src: "photo-1730035146844-bd61176d8991.jpg",
    brand: "무신사 스탠다드",
    name: "플렉스 포스",
    price: "93,420원",
  },
  {
    src: "photo-1730035146844-bd61176d8991.jpg",
    brand: "무신사 스탠다드",
    name: "플렉스 포스",
    price: "93,420원",
  },
];

const itemTag = (item) => `
  <div class="item">
    <img src="${item.src}" alt="" />
    <div class="info">
      <span class="brand">${item.brand}</span>
      <span class="name">${item.name}</span>
      <span class="price">${item.price}</span>
    </div>
  </div>`;

clothes.forEach((x) => {
  box.insertAdjacentHTML("beforeend", itemTag(x));
});
