let partyButton = document.getElementById("partyTimeButton")
let photo = document.getElementById("lolcatImage")

let clock = document.getElementById("clock")
let today = new Date()
clock.textContent = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(today)

let toggle = true;

partyButton.addEventListener("click", function(){
    toggle = !toggle
    if(toggle){
        partyButton.textContent = "Party!"
    }else{
        partyButton.textContent = "Let`s  have a party!"
    }

if(toggle){
partyButton.style.color = "white"
}else{
partyButton.style.color = "grey";
}

if(toggle){
partyButton.style.backgroundColor="#222"
}else{
    partyButton.style.backgroundColor="#FFF"
}

if(toggle){
    photo.src ="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg"
}else{
    photo.src = "https://upaws.org/wp-content/uploads/2015/02/party-cats.jpg"
}
})