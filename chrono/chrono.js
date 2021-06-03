//!!!!!!!!!!!!!!!!!!!!!!!! DEBUT DU CHRONOMETRE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//Definir Les variables avec le temps

let seconds = 0;
let minutes = 0;
let hours = 0;

//Definir variable pour garder les premiers 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Variable qui va reset le temps, status de la function setInterval()//

let interval = null;

//Variable qui va garder la valeur lorsqu'on décide de mettre pause sur notre chrono

let status = "stopped";

//Function Chronomètre - Logique pour determiner quand acrémenter la prochaine valeur

function stopWatch() {

    seconds++;

    //Logique pour determiner quand acrémenter la prochaine valeur
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    //Si secondes/minutes/hours n'on qu'un digit, on ajoute un 0 a la valeur

    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    //On rafraichit la valeur de #Display

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}


function startStop() {

    if (status === "stopped") {

        //Démarrer le minuteur (en appellant la function setInterval())
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    } else {

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

//Function pour reset le Chrono

function reset() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById('tours').innerHTML = "Temps : <br /><br />";
}

function tour() {

    var timeLap = document.getElementById('display').innerHTML;

    if (currentTimeLap === null) {
        document.getElementById('tours').innerHTML = timeLap;
    } else {

        var currentTimeLap = document.getElementById('tours').innerHTML + timeLap + "<br />";
        document.getElementById('tours').innerHTML = currentTimeLap;
    }


}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FIN DU CHRONOMETRE !!!!!!!!!!!!!!!!!!!!!!!!!!!!//