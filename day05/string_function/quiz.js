const pass = window.prompt("비밀번호 입력해주세요");

function fail(pass) {
  return pass.includes("@,!,#");
}

pass.startsWith("it");

window.console.log();
