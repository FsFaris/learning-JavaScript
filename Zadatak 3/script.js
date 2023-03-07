
let unesiBroj = prompt("Unesite broj i provjerite sa kojim je brojevima djeljiv!")
let p1 = parseInt(unesiBroj);
let p2=[]

for(let i=1; i<=p1; i++) {   
    if (p1%i===0){
        p2.push(i)
    }
}
document.write(`Broj ${p1} je djeljiv sa brojevima:  ${p2} `)