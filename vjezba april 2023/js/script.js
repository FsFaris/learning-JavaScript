const button = document.getElementById("dugme");
let input = document.getElementById("string");
let error = document.getElementById("error");
let rezultat = document.getElementById("rezultat");
let najduziString = document.getElementById("najduzistring");
let stringUNiz;
let nizUString;
let brojac = 0; 
const stringsArray = []; //niz u kom cuvam rezultate
let longestString = 0;

button.addEventListener("click", () => {
  if (input.value == "") {
    error.classList.remove("hidden");
    error.innerHTML = "Potrebno je upisati barem jedno slovo. Pokušajte ponovo";
    return;
  } else {
    error.innerHTML = "";
    error.classList.add("hidden");
    let reversedValue = input.value;

    if (brojac === 0) {
      stringsArray.push("Obrnuti niz stringa 1 je: " + reversedValue + "<br>");
    } else if (brojac === 1) {
      stringsArray.push("Obrnuti niz stringa 2 je: " + reversedValue + "<br>");
    } else if (brojac === 2) {
      stringsArray.push("Obrnuti niz stringa 3 je: " + reversedValue + "<br>");
    } else {
      return (input.disabled = true);
    }

    if (reversedValue.length > longestString) {
      longestString = reversedValue.length;
    }

    brojac++; 
    input.value = ""; 
    rezultat.innerHTML =
      stringsArray.join("") + "<br/> Najduzi string ima " + longestString + ' slova.'
  }
});
