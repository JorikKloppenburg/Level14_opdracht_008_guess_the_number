//Stap 1 & 2: Begroeten en vragen om naam + input kunnen geven van naam
let userName = prompt("Welkom! Wat is je naam?");

// Stap 3: Bericht terug zien met naam
if (userName != null && userName.length > 0) {
    alert("Hey " + userName + "!");
} else {
    alert("Voer een geldige naam in!");
}

//Stap 4: Vraag om input van een cijfer + validatie
//Stap 6: Nummer invoeren en op enter kunnen klikken
let inputNumber = prompt('Vul alsjeblieft een nummer in van 0 tot 25.');

if (inputNumber < 0 || inputNumber > 25) {
    alert("Dit is geen geldig nummer, begin opnieuw");
}
else {
    function getRandomNumber(min, max) { // Stap 5: random nummer tussen de 0 en 25
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const result = getRandomNumber(0, 25);

    // Stap 7: bericht wanneer er verkeerd is geraden + opnieuw spelen
    while (inputNumber != getRandomNumber) {
        let tryAgain = confirm(`Dat is niet correct. Het random nummer was: ${result}` +
            ". Wil je het opnieuw proberen?");
        if (tryAgain) {
            inputNumber();
        } else if (tryAgain == false) {
            alert("Dag" + userName + ". Tot de volgende keer"); break; //Stap 9: spel is af
        }
    }
    // Stap 8 Bericht voor goed geraden
    if (inputNumber == getRandomNumber) {
        alert("Gefeliciteerd, je hebt gewonnen!");
        alert("Dag " + userName + ". Tot de volgende keer"); //Stap 9: spel is af
    }

}