//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DEBUT DE L'HORLOGE !!!!!!!!!!!!!!!!!!!!!!!!!!!//

function showTime() {

    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    if (s < 10) { //Si les secondes sont plus petites que 10 on ajotue un 0 pour maintenanir un nombre a 2 chiffres
        s = "0" + s;
    }

    //Si les minutes sont plus petites que 10 on ajotue un 0 pour maintenanir un nombre a 2 chiffres
    if (m < 10) {
        m = "0" + m;
    }

    //Si les heures sont plus petites que 10 on ajotue un 0 pour maintenanir un nombre a 2 chiffres
    if (h < 10) {
        h = "0" + h;
    }

    var time = h + ":" + m + ":" + s; //La variable time devient la valeur de l'heure, minutes et secondes actuelles
    document.getElementById("Horloge").innerText = time;
    document.getElementById("Horloge").textContent = time;

    setTimeout(showTime, 1000);


}

showTime();

//////////////////////////////// FIN DE L'HORLOGE ////////////////////////////////////