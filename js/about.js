const worksSec = document.querySelector('#works')
const teamSec = document.querySelector('#team')
const base = -350

window.addEventListener('scroll', (e) => {
  scrollMotion(worksSec, worksSec, base)
  scrollMotion(teamSec, teamSec, base)
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
