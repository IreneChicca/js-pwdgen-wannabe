const nameuser = prompt("Inserisci il tuo nome")

const surnameuser = prompt("Inserisci il tuo cognome")

const coloruser = prompt("Inserisci il tuo colore preferito")


console.log(nameuser)

console.log(surnameuser)

console.log(coloruser)



document.getElementById("info").innerHTML = nameuser + surnameuser + coloruser + "12"