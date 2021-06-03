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
console.log(showTime());


function setAlarm() {

    const heureReveil = document.getElementById('heureReveil').value; //On récupére l'heure de l'alarme dans le input Time


    const descriptionReveil = document.getElementById('descriptionReveil').value; //On récupére la description de l'alarme dans le input Text


    var date = new Date(); //On recupére l'heure actuelle
    var h = date.getHours(); // 0 - 23
    if (h < 10) {
        h = "0" + h;
    }
    var m = date.getMinutes(); // 0 - 59
    if (m < 10) {
        m = "0" + m;
    }

    var time = h + ":" + m; //On l'attribue a une variable l'heure actuelle au même format que l'heure de l'alarme que l'on rentre dans le input Time


    var minutesReveil = heureReveil.substr(3);

    var minutesActuelles = m;


// console.log(new Date());
    let date0 = new Date();
    let month0 = date0.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    month0 = monthNames[month0];

    let day0 = date0.getDay() - 1;


    let year0 = date0.getFullYear();

    let completeDate0 = month0 + ' ' + day0 + ' ' + year0;

    var date1 = new Date();


    var date2 = new Date(completeDate0 + ' ' + heureReveil);

    let time1 = date1.getTime();
    let timeStampActuel = new Date(time1);
    let heureStampActuel = timeStampActuel.getHours();
// console.log('heureStampActuel:', heureStampActuel)
    let minutesStampActuel = timeStampActuel.getMinutes();
 // console.log('minutesStampActuel:', minutesStampActuel);


    let time2 = date2.getTime();
    let timeStampAlarme = new Date(time2);
    let heureStampAlarme = timeStampAlarme.getHours();
// console.log('heureStampAlarme:', heureStampAlarme)
    let minutesStampAlarme = timeStampAlarme.getMinutes();

    let heuresRestantes = heureStampAlarme - heureStampActuel;
    heuresRestantes = Math.abs(heuresRestantes);
    let minutesRestantes = minutesStampAlarme - minutesStampActuel;

    if (minutesRestantes < 0) {
        minutesRestantes = 60 - Math.abs(minutesRestantes);
        heuresRestantes = 0;
    }


    let messageAlarme = "";

    if (heuresRestantes === 0) {
        messageAlarme = "Il vous reste " + minutesRestantes + " minutes avant que l'alarme " + descriptionReveil + " sonne";
    } else {
        messageAlarme = "Il vous reste " + heuresRestantes + " heures et " + minutesRestantes + " minutes avant que l'alarme " + descriptionReveil + " sonne.";
    }


    document.getElementById("alarmToCome").innerHTML = messageAlarme, "<br />";
    console.log(messageAlarme);

// let diff = time2-time1
// let result = diff/60;
// console.log(diff/1000/60);
// console.log(completeDate0);

    if (heuresRestantes <= 0 && minutesRestantes <= 0) {
        alert(descriptionReveil);
        clearTimeout(setAlarm);
        $("#alarmToCome").prependTo("#alarmPassed");

    } else {
        setTimeout(setAlarm, 1000);
    }


}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FIN DE L'HORLOGE !!!!!!!!!!!!!!!!!!!!!!!!!!!//


//heureReveil - inputHour
//descriptionReveil - inputText
