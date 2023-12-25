let myElem = document.querySelectorAll('.img')

console.dir(myElem)
console.log(myElem.length)

function rnd(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function bcElem(element){
    element.style.backgroundColor = 'rgb('+ rnd(0,255) + ',' + rnd(0,255) + ',' + rnd(0,255) +')'

}

function izmsize(element){
    const w = rnd(1, 100)
    const h = rnd(1, w)
    element.style.width = w + 'vw'
    element.style.height = h + 'vw'
}

myElem.forEach(function (element) {
    bcElem(element)
    izmsize(element)
})