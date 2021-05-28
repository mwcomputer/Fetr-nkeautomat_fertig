
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: 
    Business-Logic (Alter --> Getränk) :: 
    Bild austauschen :: check!
*/

// Modul Ablaufsteuerung | Test:

// Trigger - Btn 
// Trigger - Input


// Event-Dispatcher

// Check auf korrekte Eingaben ...

// Modul Eingabe | Test:

// Modul: Business-Logic (Mapping) | Test:




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