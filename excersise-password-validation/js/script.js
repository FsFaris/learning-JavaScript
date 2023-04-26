const button = document.getElementsByClassName('button')[0]
let input = document.getElementsByClassName('password')[0]
let error = document.getElementsByClassName('error')[0]
let result = document.getElementsByClassName('result')[0]

button.addEventListener('click', ()=>{
    if(input.value.trim() == ""){
        error.innerHTML += "Sifra je obavezna! <br>"
        return;
    } else {error.innerHTML = ''}
    if (input.value.length > 0 && input.value.length < 3) {
      error.innerHTML += "Šifra mora sadržavati minimalno 3 slova ili znaka. <br>";
        }
        
    let numCount = 0;
for (let i = 0; i < input.value.length; i++) {
  if (!isNaN(input.value[i])) {
    numCount++;
  }
}
    if (numCount < 3) {
      error.innerHTML += "Sifra mora sadrzavati minimalno 3 broja. <br>";
        } 
    if(input.value.includes('$') === false || input.value.includes('%') === false){
        error.innerHTML += "Sifra mora sadržavati znakove '$' i '%' <br>";
        }
    if (!(input.value.includes('$') === false || input.value.includes('%') === false) && !(numCount < 3) && !(input.value.length > 0 && input.value.length < 3) && !(input.value.trim() == "")){
    result.innerHTML = "Upisana sifra je:" + input.value   
        }
})