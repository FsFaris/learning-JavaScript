let count = 0;
let nula = document.getElementsByClassName("nula");
let increase = document.getElementsByClassName("increase-el")
let decrease = document.getElementsByClassName("decrease-el")
let reset = document.getElementsByClassName("reset-el")

console.log(increase)
console.log(decrease)
console.log(reset)
console.log(nula)
typeof(reset)

increase[0].addEventListener("click", function() {
  count++;
  nula[0].textContent = count;
  if (count > 0) {
    nula[0].style.color = "green";
  } else if (count < 0) {
    nula[0].style.color = "red";
  } else ( nula[0].style.color = "black")
})

decrease[0].addEventListener("click", function() {
  count--;
  nula[0].textContent = count;
  if (count > 0) {
    nula[0].style.color = "green";
  } else if (count < 0) {
    nula[0].style.color = "red";
  } else ( nula[0].style.color = "black")
})

reset[0].addEventListener("click", function() {
  count = 0;
  nula[0].textContent = count;
  if (count > 0) {
    nula[0].style.color = "green";
  } else if (count < 0) {
    nula[0].style.color = "red";
  } else ( nula[0].style.color = "black")
})

