const popup = document.querySelector("#popup");
const btnClose = popup.querySelector(".pop-close");

let isCookie = document.cookie.indexOf("popup=false");
console.log(isCookie);

// 체크 전 쿠키 미생성 => 팝업 생성
// 체크 후 쿠키 생성 => 팝업 제거

if (isCookie == -1) {
  popup.style.display = "fixed";
  console.log("쿠키 없음");
  body.style.overflow = "hidden";
} else {
  popup.style.display = "none";
  console.log("쿠키 있음");
  body.style.overflow = "auto";
}

btnClose.addEventListener("click", e => {
  e.preventDefault();
  let isChecked = popup.querySelector("input[type=checkbox]").checked;
  let id_name = popup.getAttribute("id");

  popup.style.display = "none";
  body.style.overflow = "auto";

  if (isChecked) {
    setCookie(id_name, "false", 1);
    popup.style.display = "none";
  } else {
    popup.style.display = "fixed";
  }
})

function setCookie(name, value, time) {
  const today = new Date();
  console.log(today);

  const date = today.getDate();
  console.log(date);

  today.setDate(date + time); // 날짜에 특정 시간만큼 더한 값

  const dueDate = today.toUTCString();

  document.cookie = `${name}=${value}; path=/; expires=${dueDate}`;
}