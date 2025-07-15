const side = window.prompt(`한 변의 길이를 입력해주세요`);

const extent = Number(side) * Number(side);

window.console.log(`${side} * ${side} = ${extent}`);

const side1 = window.prompt(`밑 변의 길이를 입력해주세요`);

const height = window.prompt(`높이를 입력해주세요`);

const extent1 = (Number(side1) * Number(height)) / Number(2);

window.console.log(`${side1} * ${height} / 2 = ${extent1}`);

const krw = window.prompt(`원화를 입력해주세요`);

const jpy = Number(krw) / String(10.24);

window.console.log(`${krw}/10.24 = ${jpy}`);

const height1 = window.prompt(`신장을 입력해주세요`);

const kg = window.prompt(`몸무게를 입력해주세요`);

const bmi = Number(kg) / (Number(height1) * Number(height1));

window.console.log(`${kg}/(${height1} * ${height1}) = ${bmi}`);
