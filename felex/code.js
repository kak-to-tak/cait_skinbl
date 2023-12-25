let myElem = document.querySelectorAll('.fl')

console.dir(myElem)
console.log(myElem.length)

function rnd(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function bcElem(element){
    const a = rnd(0, 1)
    element.style.backgroundColor = a == 0 ? 'red' : 'blue'
}

// function izmsize(element){
//     const w = rnd(1, 100)
//     const h = rnd(1, w)
//     element.style.width = w + 'vw'
//     element.style.height = h + 'vw'
// }

myElem.forEach(function (element) {
    bcElem(element)
    //izmsize(element)
})