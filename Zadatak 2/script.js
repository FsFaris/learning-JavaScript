let unesiBrojeve = prompt(`Koliko želite unijeti negativnih brojeva?`)

let p1= parseInt(unesiBrojeve);
let niz = [];

for( let i= 1; i<=p1; i++) {
    let unesenBroj = prompt(`Unesite negativan broj ` + i);
    p2 = parseInt(unesenBroj)
    if(p2<0){
niz.push(p2)
    }
}
if(true){
document.write(`Niz negativnih brojeva je: ${niz} <br>`)
}
if(niz == false){
    document.write(`Niste unijeli nijedan negativan broj! <br>`)
}
//suma negativnih brojeva

let sumaNegBrojeva = 0;

for(let i=0; i<niz.length;i++) {
    if (niz[i]<0){
        sumaNegBrojeva = sumaNegBrojeva + niz[i]
    }
}
document.write(`Suma negativnih brojeva je: ${sumaNegBrojeva} <br>`)

