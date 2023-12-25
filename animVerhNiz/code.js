let ob = document.getElementsByName('text')
/*for (let i = 0; i < 50; i++) {
  ob[i].style.backgroundColor = 'yellow'
}*/
console.dir(ob)
let i = 0
let x = 49
function tic() {
  if (i == 50) {
    if (x > 1) {
      ob[x - 1].style.backgroundColor = 'yellow'
      ob[x].style.backgroundColor = 'red'
      console.log('a')
    } else if (x == 1) {
      ob[x - 1].style.backgroundColor = 'yellow'
      ob[x].style.backgroundColor = 'red'
      i = 0
      console.log('b')
    }
    x--
  } else if (i == 0) {
    ob[i].style.backgroundColor = 'yellow'
    i++
    x = 49
  } else {
    ob[i].style.backgroundColor = 'yellow'
    ob[i - 1].style.backgroundColor = 'red'
    i++
  }
}
setInterval(tic, 100)
