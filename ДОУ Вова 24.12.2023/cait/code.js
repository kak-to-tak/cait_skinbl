let elem = document.querySelector("div");
let btn = document.querySelector("img");

console.dir(elem);
console.dir(btn);

btn.onclick = function () {
  elem.classList.toggle("menu");
  btn.classList.toggle("knopka");
};
