let elem = document.querySelectorAll('div')
let but = document.querySelectorAll('input')

console.log(elem)

function test(){
    elem[0].classList.toggle('q1')
}

but.onclick = function() {
    test()
}
