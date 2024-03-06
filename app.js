const container = document.querySelector('body')
const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')
const Mode = document.querySelector('.dark-mode')

Mode.addEventListener('click', () => {
  container.classList.toggle('dark')
})

function setTime() {
  let time = new Date()

  //   console.log(time)

  /*
360/60 * ss
360/60 * mm
360/12 * hh
*/

  //   console.log(time.getSeconds(), time.getMinutes(), time.getHours())

  let sec = time.getSeconds() * 6
  //   sec = (sec + 1) % 60
  //   sec = sec * 6
  let min = time.getMinutes() * 6 + sec / 60
  let hh = time.getHours() * 30 + min / 60

  //   console.log(sec, min, hh)

  secondHand.style.rotate = `${sec}deg`
  minuteHand.style.transform = `rotate(${min}deg)`
  hourHand.style.transform = `rotate(${hh}deg)`
}

setInterval(setTime, 1000)

setTime()
