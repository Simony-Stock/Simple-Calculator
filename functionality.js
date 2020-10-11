document.addEventListener('DOMContentLoaded', () => {

const Screen = document.querySelector('.numberDisplay')

let Equ = ""
let ans 

//clicking 0-9
document.querySelector(".button0").addEventListener("click", () => {
  Equ = Equ + 0
  Screen.innerHTML = Equ 
});

document.querySelector(".button1").addEventListener("click", () => {
  Equ = Equ + 1
  Screen.innerHTML = Equ 
});

document.querySelector(".button2").addEventListener("click", () => {
  Equ = Equ + 2
  Screen.innerHTML = Equ 
});

document.querySelector(".button3").addEventListener("click", () => {
  Equ = Equ + 3
  Screen.innerHTML = Equ 
});

document.querySelector(".button4").addEventListener("click", () => {
  Equ = Equ + 4
  Screen.innerHTML = Equ 
});

document.querySelector(".button5").addEventListener("click", () => {
  Equ = Equ + 5
  Screen.innerHTML = Equ 
});

document.querySelector(".button6").addEventListener("click", () => {
  Equ = Equ + 6
  Screen.innerHTML = Equ 
});

document.querySelector(".button7").addEventListener("click", () => {
  Equ = Equ + 7
  Screen.innerHTML = Equ 
});

document.querySelector(".button8").addEventListener("click", () => {
  Equ = Equ + 8
  Screen.innerHTML = Equ 
});

document.querySelector(".button9").addEventListener("click", () => {
  Equ = Equ + 9
  Screen.innerHTML = Equ 
});

document.querySelector(".buttonClear").addEventListener("click", () => {
  Equ = ""
  Screen.innerHTML = Equ 
});

document.querySelector(".roundBrakOpen").addEventListener("click", () => {
  Equ = Equ + '('
  Screen.innerHTML = Equ 
});

document.querySelector(".roundBrakClose").addEventListener("click", () => {
  Equ = Equ + ')'
  Screen.innerHTML = Equ 
});

document.querySelector(".multiply").addEventListener("click", () => {
  Equ = Equ + '*'
  Screen.innerHTML = Equ 
});

document.querySelector(".divide").addEventListener("click", () => {
  Equ = Equ + '/'
  Screen.innerHTML = Equ 
});

document.querySelector(".buttonDecimal").addEventListener("click", () => {
  Equ = Equ + '.'
  Screen.innerHTML = Equ 
});

document.querySelector(".buttonNeg").addEventListener("click", () => {
  Equ = Equ + '*(-1)'
  Screen.innerHTML = Equ 
});

document.querySelector(".add").addEventListener("click", () => {
  Equ = Equ + '+'
  Screen.innerHTML = Equ 
});

document.querySelector(".sub").addEventListener("click", () => {
  Equ = Equ + '-'
  Screen.innerHTML = Equ 
});

document.querySelector(".buttonEquals").addEventListener("click", () => {
  ans = eval(Equ)
  Screen.innerHTML = ans
  Equ = ""
});

})