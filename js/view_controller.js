
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: 
    Business-Logic (Alter --> Getränk) :: 
    Bild austauschen :: check!
*/

// Modul Ablaufsteuerung | Test:
controller()
function controller() {
    ausgabe(updateImg(checkAge(4)));
}


// Trigger - Btn 
// Trigger - Input


// Event-Dispatcher

// Check auf korrekte Eingaben ...

// Modul Eingabe | Test:

// Modul: Business-Logic (Mapping) | Test:
// ausgabe(checkAge(2));
// ausgabe(checkAge(6));
// ausgabe(checkAge(15));
// ausgabe(checkAge(20));
// ausgabe(checkAge(132));
// ausgabe(checkAge());
function checkAge(age) {
    switch (true) 
    {
        case (age >= 0) && (age <= 5):
            return "milch";
        case (age >= 6) && (age <= 12):
            return "saft";
        case (age >= 13) && (age <= 17):
            return "cola";
        case (age >= 18) && (age <= 130):
            return "wein";    
        default:
            return "tee";  
    }
}


// Modul: Bild aktualisieren | Test:
// ausgabe(updateImg("cola"));
function updateImg(imgName) {
    let img = document.getElementById("bevImg");
    img.src = "./bilder/" + imgName + ".jpg";
    return imgName; // monitoring
}

//Modul: Konsolenausgabe --> Test:
function ausgabe(outputStr) {
    console.log(outputStr);
}