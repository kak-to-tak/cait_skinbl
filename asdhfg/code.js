// let elem1 = document.querySelector('div.text')
// let elem2 = document.querySelector('h1')
// let elem3 = document.querySelector('#bl2')

// console.log(elem1)
// console.log(elem2)
// console.log(elem3)

let allElem = document.querySelectorAll('.img')
console.dir(allElem)

function rnd(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

for(i = 0; i < 4; i++){
  let width0 = rnd(1,700)
  allElem[i].style.width = width0 + 'px'

  let height0 = rnd(1,700)

  if(height0 > width0){
    while(height0 > width0){
      height0 = rnd(1,150)
    }
  }
  allElem[i].style.height = height0 + 'px'

  allElem[i].style.backgroundColor = 'rgb('+ rnd(0,255) + ',' + rnd(0,255) + ',' + rnd(0,255) +')'
}
