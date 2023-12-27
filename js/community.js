const slider = document.querySelector("#news .inner");
const pagination = document.querySelectorAll(".pagination li");
const panel = document.querySelectorAll(".panel li");
const panelTxt = document.querySelectorAll(".panel-txt li");
const boardTab = document.querySelectorAll(".tab li");
const boardList = document.querySelectorAll("table");

// 페이징
pagination.forEach((el, index) => {
  el.addEventListener("click", e => {
    e.preventDefault();

    console.log(index);

    active(pagination, index);
    active(panel, index);
    active(panelTxt, index);
  });
});

// 게시판 리스트
boardTab.forEach((el, index) => {
  el.addEventListener("click", e => {
    e.preventDefault();

    active(boardTab, index);
    active(boardList, index);
  });
});

// 활성화 함수
function active(obj, index) {
  for (let el of obj) {
    el.classList.remove("on");
  }
  obj[index].classList.add("on");
};

