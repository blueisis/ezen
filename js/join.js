const form = document.querySelector("#join-form");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", e => {
  // 리턴값이 false 일때 e.preventDefault()로 막기
  if (!isTxt("name", 2)) e.preventDefault();
  if (!isTxt("id", 5)) e.preventDefault();
  if (!isTxt("comments", 10)) e.preventDefault();
  if (!isPwd("pwd", "pwd2", 5)) e.preventDefault();
  if (!isEmail("email")) e.preventDefault();
  if (!isCheck("news")) e.preventDefault();
  if (!isCheck("path")) e.preventDefault();
  if (!isAgree("agree")) e.preventDefault();
})

// 이름, 아이디
function isTxt(name, len) {
  if (len === undefined) len = 5; // 입력받은 값이 없을때 5로 지정
  let input = form.querySelector(`[name=${name}]`);
  let val = input.value;

  if (val.length >= len && val != "") { // len 이상이고 빈값이 아니라면
    const errMsgs = input.closest("tr").querySelectorAll("p"); // 생성되어 있는 메세지가 있는지 찾기

    if (errMsgs.length > 0) input.closest("tr").querySelector("p").remove(); // 제거 후

    return true; // 인증 통과 
  } else { // len 미만이고 빈값이라면
    const errMsgs = input.closest("tr").querySelectorAll("p");

    if (errMsgs.length > 0) input.closest("tr").querySelector("p").remove(); // 제거 후

    const errMsg = document.createElement("p");
    errMsg.append(`${len}글자 이상 입력해 주세요`);
    input.closest("tr").append(errMsg); // 에러메세지 생성

    return false; // 인증 미통과
  }
}

// 비밀번호
function isPwd(name, name2, len) {
  let pwd = form.querySelector(`[name=${name}]`);
  let pwd2 = form.querySelector(`[name=${name2}]`);
  let pwd_val = pwd.value;
  let pwd2_val = pwd2.value;

  //비밀번호에 영문자,숫자, 특수문자 포함되어있는지
  const num = /[0-9]/;
  const eng = /[a-zA-Z]/;
  const spc = /[~!@#$%^&*()_+]/;

  if (pwd_val === pwd2_val && pwd_val.length >= len && num.test(pwd_val) && eng.test(pwd_val) && spc.test(pwd_val)) {
    const errMsgs = pwd2.closest("tr").querySelectorAll("p");

    if (errMsgs.length > 0) pwd2.closest("tr").querySelector("p").remove();

    return true;
  } else {
    const errMsgs = pwd2.closest("tr").querySelectorAll("p");

    if (errMsgs.length > 0) pwd2.closest("tr").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append(`영문, 숫자, 특수문자를 포함해 ${len}글자 이상 입력해 주세요`);
    pwd2.closest("tr").append(errMsg);

    return false;
  }
}

// 이메일
function isEmail(name) {
  let input = form.querySelector(`[name=${name}]`);
  let val = input.value;

  if (/@/.test(val)) {
    const errMsgs = input.closest("tr").querySelectorAll("p");

    if (errMsgs.length > 0) input.closest("tr").querySelector("p").remove();

    return true;
  } else {
    const errMsgs = input.closest("tr").querySelectorAll("p");

    if (errMsgs.length > 0) input.closest("tr").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append("'@'를 포함한 전체 이메일 주소를 입력해 주세요");
    input.closest("tr").append(errMsg);

    return false;
  }
}

// check
function isCheck(name) {
  let inputs = form.querySelectorAll(`[name=${name}]`);
  let isChecked = false;

  for (let el of inputs) {
    if (el.checked) isChecked = true;
  }

  if (isChecked) {
    const errMsgs = inputs[0].closest("tr").querySelectorAll("p");

    if (errMsgs.length > 0) inputs[0].closest("tr").querySelector("p").remove();

    return true;
  } else {
    const errMsgs = inputs[0].closest("tr").querySelectorAll("p");

    if (errMsgs.length > 0) inputs[0].closest("tr").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append("하나 이상 체크해 주세요");
    inputs[0].closest("tr").append(errMsg);

    return false;
  }
}

// 동의 체크
function isAgree(name) {
  let input = form.querySelector(`[name=${name}]`);
  let isChecked = false;

  if (input.checked) {
    isChecked = true;
    console.log('동의 체크 완료');

    return true;
  } else {
    console.log('동의 미체크');
    alert("동의에 체크해 주세요");

    return false;
  }
}