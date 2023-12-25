// let x = -1234
// function mod(x) {
//   return x > 0 ? x : x / -1
// }
// console.log(mod(x))
// let elem = document.getElementById('text')

// function ElemBackCol(bc) {
//   elem.style.backgroundColor = bc
// }

// function ElemFontFam(ff) {
//   elem.style.fontFamily = ff
// }

// function ElemFontSi(fz) {
//   elem.style.fontSize = fz
// }

// function ElemTxt(txt) {
//   elem.style.outerText = txt
// }
// console.dir(elem)

let textX = document.getElementById('textX')
let textY = document.getElementById('textY')
let elem = document.getElementById('b')
let ob = document.getElementById('abc')
console.dir(ob)
function abc() {
  //console.log('размер выосты экрана'+ window.outerHeight)
  //console.log('размер выосты экрана'+ window.innerHeight)
  console.log(
    'размер выосты экрана' + document.querySelector('.block').onmousemove
  )
}

let x, y
document.addEventListener('mousemove', function (event) {
  x = event.clientX
  y = event.clientY
  textX.innerText = x
  textY.innerText = y

  elem.style.top = y - 5 + 'px'
  elem.style.left = x - 4 + 'px'
})

// let red = 0
// function sayHi() {
//   red++
//   elem.style.color = 'rgb(' + red + ',0,0)'
// }

// for (let i = 0; i < 256; i++) {
//   setTimeout(sayHi, 20 * i)
// }
