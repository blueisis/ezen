const loading_page = document.getElementById('load')
window.onload = function () {
  setTimeout(function () {
    loading_page.style.opacity = '0'
    setTimeout(function () {
      loading_page.style.display = 'none'
    }, 1000)
  }, 200)
}

const worksSec = document.querySelector('#works')
const introduceSec = document.querySelector('#introduce')
const base = -1000
const base2 = -1000

window.addEventListener('scroll', (e) => {
  scrollMotion(worksSec, worksSec, base)
  scrollMotion(introduceSec, introduceSec, base2)
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
