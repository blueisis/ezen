const body = document.querySelector('body')
const vidSec = document.querySelector('#videos')

// 팝업
vidSec.addEventListener('click', (e) => {
  e.preventDefault()

  if (e.target.closest('a') == null) return

  const vidId = e.target.closest('a').getAttribute('href')
  let pop = document.createElement('figure')
  pop.classList.add('pop')
  pop.innerHTML = `
                    <iframe src="http://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
                    <span class="close">close</span>
                  `

  vidSec.appendChild(pop)
  body.style.overflow = 'hidden' // 스크롤 방지
})

// 팝업 닫기
vidSec.addEventListener('click', (e) => {
  const pop = vidSec.querySelector('figure')

  if (pop != null) {
    const close = pop.querySelector('.close')

    if (e.target == close) {
      pop.remove()
      body.style.overflow = 'auto' // 스크롤 방지 해제
    }
  }
})
