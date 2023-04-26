let answer = document.getElementById("answer")
let question = document.getElementById("questionButton")
let input = document.getElementById("input-el")
let enterPressed = false;
let photoBall = document.getElementById("8ball")

question.addEventListener("click", function(){
    input.focus()

input.addEventListener("keydown", function(event) {
    if (event.code === "Enter" && !enterPressed) {
      enterPressed = true;
    let random_number = Math.floor((Math.random() * 10) + 1);

    if ( random_number == 1){
        answer.innerHTML = " Yes, probalby"
      } else if (random_number == 2){
        answer.innerHTML = " No, probably not"
      } else if (random_number == 3){
        answer.innerHTML = "It can be like that"
      }else if (random_number == 4){
        answer.innerHTML = "Maybe"
      }else if (random_number == 5){
     answer.innerHTML = "Yes, for sure"
      }else if (random_number == 6){
        answer.innerHTML = "No, definitely not"
      } else if (random_number == 7){
        answer.innerHTML= "I am happy to answer to you that will happen."
      } else if (random_number == 8){
        answer.innerHTML = "I am sad to say that will not happen"
      } else if (random_number == 9){
        answer.innerHTML = "I am not sure"
      } else answer.innerHTML="You are lucky!"

      answer.style.color="red"
      answer.style.fontSize = "22px"
      photoBall.style.opacity = 0.3
}
})
})

  

