//Acquisisce dati dall'utente
let nome = prompt("Enter your name: ");
let surname = prompt("Enter your surname: ");
let color = prompt("Enter your favorite color: ");

/*Imposta anno corrente, è stato inserito con let e non con const in quanto
se si volesse aggiornare il numero dell'anno mano a mano che gli anni passano
basterebbe assegnare a year un nuovo valore*/
let year = "22";


//Crea la password concatenando i dati immessi dall'utente e l'anno corrente
let password = nome + surname + color + year;

//Inserisce nell' elemento HTML con ID "pswd" il valore della variabile password
document.getElementById("pswd").innerHTML = password;