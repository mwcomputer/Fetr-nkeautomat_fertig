
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite ::check 
	Check Daten :: 
    Btn. Trigger :: check
    Business-Logic (Alter --> Getränk) :: 
    Bild austauschen :: check!
*/

// Modul Ablaufsteuerung | Test:
controller()
function controller() {
    ausgabe(updateImg(checkAge(getInput())));
}


// Trigger - Btn 
let btn = document.getElementById("trigBtn");
btn.addEventListener("click",actOnClick);
// Trigger - Input



// Event-Dispatcher
function actOnClick() {
    if (isInputValid) {
        controller()
    } else {
        ausgabe("input nicht korrekt.")
        
    }

}

// Check auf korrekte Eingaben ...
function getInput(){
    return false
}


// Modul Eingabe | Test:
//ausgabe(getInput());
function getInput() {
    let inputField = document.getElementsByName("eingabe")[0];
    let age = parseInt(inputField.value);
    return age;
}
//Modul: Business-Logic --> Test:
/* ausgabe(checkAge(2));
ausgabe(checkAge(6));
ausgabe(checkAge(17));
ausgabe(checkAge(20)); */
function checkAge(age) {
    switch (true) {
        case (age >= data.milk.lower) && (age <= data.milk.upper):
            return data.milk.bev;
        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev;
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev;
                default:
                return data.default.bev;   
    } 
}


// Modul: Bild aktualisieren | Test:
 ausgabe(updateImg("cola"));
function updateImg(imgName) {
    let img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName; // monitoring
}

//Modul: Konsolenausgabe --> Test:
function ausgabe(outputStr) {
    console.log(outputStr);
}