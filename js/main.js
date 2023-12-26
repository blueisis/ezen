const loading_page = document.getElementById('load')
window.onload = function () {
  setTimeout(function () {
    loading_page.style.opacity = '0'
    setTimeout(function () {
      loading_page.style.display = 'none'
    }, 1000)
  }, 200)
}

// 익스플로어 섹션
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerView: 3.5,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 1,
  speed: 2000,
  loopFillGroupWithBlank: false, //그룹수가 맞지 않을 경우 빈칸으로
  grabCursor: true, //스와이프시 마우스 커서모양 변경
  autoplay: {
    //자동롤링
    delay: 500,
    disableOnInteraction: false,
    //롤링중에 스와이프되면 롤링 중지 (true)
    //롤링 중에 스와이프되더라도 롤링 계속 (false)
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const swiperCompany = new Swiper('.mySwiper-company', {
  slidesPerView: 1,
  slidesPerView: 1,
  loop: true,
  loopAdditionalSlides: 1,
  speed: 500,
  grabCursor: true, //스와이프시 마우스 커서모양 변경
  autoplay: {
    //자동롤링
    delay: 2000,
    disableOnInteraction: false,
    //롤링중에 스와이프되면 롤링 중지 (true)
    //롤링 중에 스와이프되더라도 롤링 계속 (false)
  },
})

// landof 섹션
const landofSec = document.querySelector('#landof')
const base = -900
const slideSec = document.querySelector('#welcome2')
const base2 = -900

window.addEventListener('scroll', (e) => {
  scrollMotion(landofSec, landofSec, base)
  scrollMotion(slideSec, slideSec, base2)
})

function scrollMotion(section, target, base) {
  let scroll = window.scrollY || window.pageYOffset
  const top = section.offsetTop + base
  const bottom = section.offsetTop + section.offsetHeight

  if (scroll >= top && scroll <= bottom) {
    target.classList.add('on')
  } else {
    target.classList.remove('on')
  }
}

const body = document.querySelector('body')
const headerMenuBtn = document.querySelector('.menuBtn')
const headerMenu = document.querySelector('.header-btn-menu')
const menuClose = document.querySelector('.menuClose')
console.log(headerMenu)

headerMenuBtn.addEventListener('click', (e) => {
  e.preventDefault()

  headerMenu.style.display = 'flex'
  body.style.overflow = 'hidden'
})

menuClose.addEventListener('click', (e) => {
  e.preventDefault()

  headerMenu.style.display = 'none'
  body.style.overflow = 'auto'
})
