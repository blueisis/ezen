const body = document.querySelector("body");
const frame = document.querySelector("#list");
const loading = document.querySelector(".loading");

const base = "https://www.flickr.com/services/rest/?";
const method = "flickr.interestingness.getList";
const key = "4f9617a3db3419a6644895be7f0a4fac";
const per_page = 32;
const format = "json";

const url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

callData(url);

// 게시물 눌렀을 때
//동적으로 팝업 생성
frame.addEventListener("click", e => {
  e.preventDefault();

  if (e.target == frame) return;

  let target = e.target.closest(".item").querySelector(".thumb");

  if (e.target == target) {
    body.style.overflow = "hidden";

    let imgSrc = target.closest("a").getAttribute("href");

    let pop = document.createElement("aside");
    pop.classList.add("pop");
    let pops = `
                <div class="con">
                    <img src="${imgSrc}">
                    <span class="close">close</span>
                </div>
                `;
    pop.innerHTML = pops;
    body.append(pop);
  } else {
    return;
  }
});

// 게시물 팝업 제거
body.addEventListener("click", e => {
  let pop = e.target.closest(".pop");

  if (pop != null) {
    let close = pop.querySelector(".close");
    if (e.target == close) {
      pop.remove();
      body.style.overflow = "auto";
    }
  }
})

// flick 데이터 불러오기
function callData(url) {
  frame.innerHTML = "";
  loading.classList.remove("off");
  frame.classList.remove("on");

  fetch(url)
    .then(data => {
      return data.json();
    })
    .then(json => {
      console.log(json.photos.photo);
      let items = json.photos.photo;

      if (items.length > 0) {
        createList(items);
        delayLoading();
      } else {
        console.log("이미지가 존재하지 않습니다");
        loading.classList.add("off");
      }
    });
}

// 동적으로 게시물 생성
function createList(items) {
  let htmls = "";

  items.forEach(data => {
    let imgSrcPop = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;
    let imgSrcThumb = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;

    htmls += `
              <li class="item">
                  <div>
                      <a class="pop" href="${imgSrcPop}">
                          <img class="thumb" src="${imgSrcThumb}">
                      </a>
                      <p>${data.title}</p>
                      <span>
                          <strong>${data.owner}</strong>
                      </span>
                  </div>
              </li>
            `;

    frame.innerHTML = htmls;
  });
}

// isotope - 게시물 정렬
function isoLayout() {
  frame.classList.add("on");
  loading.classList.add("off");

  new Isotope("#list", {
    itemSelector: ".item",
    columnWidth: ".item",
    transitionDuration: "0.5s"
  });
}

// 로딩
function delayLoading() {
  const imgs = frame.querySelectorAll("img");
  const len = imgs.length;
  let count = 0;

  for (let el of imgs) {
    el.onload = () => {
      count++;

      if (count == len) isoLayout();
    }
  }
}