const boardgame = {
  name: "할리갈리",
  players: 4,
  time: "4min",
};

window.console.log(boardgame[name]);
window.console.log(boardgame[players]);
window.console.log(boardgame[time]);

const info = {
  name: "정현진",
  age: 28,
  eyes: {
    left: 1.2,
    right: 1.5,
  },
};

window.console.log(info.eyes.left);
window.console.log(info[eyes][left]);

//없는키를 요청하면 undefined
window.console.log(info.living);
//없는 키추가

info.living = "김포";
window.console.log(info.living);
