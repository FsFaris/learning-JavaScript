let result = document.getElementById("calculator_screen")

let operator = document.getElementsByClassName("operator")
let plus = operator[0]
let minus = operator[1]
let puta = operator[2]
let podjeljeno = operator[3]
let jednako = operator[4]
const AC = document.querySelector(".all-clear")
const decimal = document.getElementsByClassName("decimal")[0]
const equal = document.querySelector(".equal-sign")
const nula = document.getElementById("0")
const jedan = document.getElementById("1")
const dva = document.getElementById("2")
const tri = document.getElementById("3")
const cetiri = document.getElementById("4")
const pet = document.getElementById("5")
const sest = document.getElementById("6")
const sedam = document.getElementById("7")
const osam = document.getElementById("8")
const devet = document.getElementById("9")

console.log(jednako)


nula.addEventListener("click", function(){
    result.value += 0
    console.log("nula pritisnuta")
    })
jedan.addEventListener("click", function(){
    result.value += 1
})    
dva.addEventListener("click", function(){
    result.value += 2
})
tri.addEventListener("click", function(){
    result.value += 3
})
cetiri.addEventListener("click", function(){
    result.value += 4
    })
pet.addEventListener("click", function(){
    result.value += 5
})
sest.addEventListener("click", function(){
    result.value += 6
})
sedam.addEventListener("click", function(){
    result.value += 7
})
osam.addEventListener("click", function(){
    result.value += 8
})
devet.addEventListener("click", function(){
    result.value += 9
    })
    
plus.addEventListener("click", function(){
    result.value += "+"
    console.log("plus kliknut")
})
minus.addEventListener("click", function(){
    result.value += "-"
})
puta.addEventListener("click", function(){
    result.value += "*"
})
podjeljeno.addEventListener("click", function(){
    result.value += "/"
})
AC.addEventListener("click", function(){
    result.value = ""
})
decimal.addEventListener("click", function(){
    result.value += "."
})

jednako.addEventListener("click", function(){
    try{
   result.value = eval(result.value)
    }
    catch(err){
        alert("Unesite pravilo operatore!")
    }
})
