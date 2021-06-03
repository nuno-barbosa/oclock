//!!!!!!!!!!!!!!!!!!!!!!!! DEBUT DU MINUTEUR !!!!!!!!!!!!!!!!!!!!!!!!!!!//

function getInputValue() {
    let choice = document.getElementById('choice').value;

    if (isNaN(choice)) { //NaN = NOT A NUMBER - PAS UN NOMBRE, donc si la valeur rentrée dans l'input n'est pas un nombre
        alert('La valeur entrée doit être un nombre'); //On décleche une alerte avec un message;
    } else { //Sinon
        let startingMinutes = choice; //La valeur de départ est égale a la valeur entrée dans l'input
        this.choice.value = (1); //On vide l'input
        let time = startingMinutes * 60; //On décompose les minutes en secondes

        const countDownEl = document.getElementById('countdown'); //On crée une variable - CONST égal a VARIABLE - On récupére countdown sur notre HTML

        setInterval(updateCountdown, 1000); //setInterval envoie la function, ici on envoie la function chaque 1000milisecondes - chaque seconde.

        function updateCountdown() { //On crée notre function
            const minutes = Math.floor(time / 60); //Math.floor divise et arrondit a l'inferieur, si 90 dix secondes on arrondit a 1 minute
            let seconds = time % 60; //Modulo prend la valeur qui ne rentre pas dans la division, donc on recupere les 30 secondes perdues dans l'arrondi de la division au dessus

            seconds = seconds < 10 ? '0' + seconds : seconds; //Si secondes est inferieur a 10, on concatène 0 et la seconde, autrement l'affichage sera par exemple 1:9

            countDownEl.innerHTML = `${minutes} : ${seconds}`;//innerHTML permet d'inserer des valeurs dans notre code html, ici les variables minutes et secondes
            if (time > 0) { //Si le temps restant est supérieur a 0;
                time--; //On décrémente
            } else { //Sinon
                countDownEl.innerHTML = window.alert('Le temps est écoulé !'); //On change la valeur envoyée dans l'HTML par une phrase, on pourrait ajouter une alerte.
            }
        }
    }
}


function plusInputValue() {
    plus = document.getElementById('choice'); //On récupére la valeur de choice
    plus.value = parseInt(plus.value) + 1; //On incrémente sa valeur
    choiceEl.innerHTML = plus; //On affiche la nouvelle valeur
}

function lessInputValue() {
    less = document.getElementById('choice'); //On récupére la valeur de choice
    less.value = parseInt(less.value) - 1; //On décrémente sa valeur
    choiceEl.innerHTML = less; //On affiche la nouvelle valeur
}

//!!!!!!!!!!!!!!!!!!!!!!!! FIN DU MINUTEUR !!!!!!!!!!!!!!!!!!!!!!!!!!!!//
