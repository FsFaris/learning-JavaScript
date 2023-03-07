
let nizVrijednosti = prompt(` Unesite koliko brojeva želite unijeti:`)
let p1 = parseInt(nizVrijednosti)
let niz = []

for(let i = 1; i <= nizVrijednosti; i++){
	let p2 = prompt('Unesite element niza broj: ' + i);
	let p3 = parseInt(p2);
	niz.push(p3);
}
document.write(`Upisane vrijednosti su: ${niz} <br>`)
niz.sort((a, b) => a - b)
document.write(`Sortirani niz je: ${niz} <br>`)

let largest = 0

for (let i=0; i<niz.length; i++) {
    if (niz[i] > largest) {
        largest = niz[i]
}
}
console.log(largest)
document.write(`Najveći upisani broj je: ${largest} <br>`)

let avg = Math.round(niz.reduce(function (a, b) { return a + b }) / niz.length)
console.log(avg)

document.write(`Prosječna (jednodecimalna) vrijednost upisanih brojeva je: ${avg} <br>`)

let neparni = 0
for (let i=0; i<niz.length; i++){
    if( niz[i]%2!==0){
        console.log(niz[i] + "su neparni brojevi")
       neparni++;
    }
}

document.write(`Broj neparnih brojeva koji su upisani u kurs je: ${neparni}`)
