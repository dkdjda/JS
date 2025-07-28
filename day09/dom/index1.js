// 1.document[html] queryselect(찾기),creatElement(만들기)
// 2.Element[TAG] appendChild(자식 태그로 넣기)

//div - 글씨색[pink],배경색[green],폰트크기[30px]
const div = document.createElement("div");
div.innerHTML = "지금 두번째 시간임";
div.style.color = "pink";
div.style.backgroundColor = "green";
div.style.fontSize = "30px";
document.body.appendChild(div);

//button -해피

const button = document.createElement("button");
button.innerHTML = "해피!";
button.style.color = "blue";
button.style.backgroundColor = "yellow";
button.style.fontSize = "20px";
button.style.padding = "10px";
document.body.appendChild(button);
