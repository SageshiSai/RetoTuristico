
// FORMULARIO

document.getElementById("email").addEventListener("keypress", function (event) {
    if (comprobaremail(event)==false) {
        event.preventDefault();
    }
});
document.querySelector("form").addEventListener("keyup", aktibatu);

function comprobaremail(e) {
    var email = document.getElementById("email").value;
    if (e.key == "@") {
        if (email.indexOf("@") == -1) {
            return true;
        }
        else {
            alert("Ezin dira 2 @ idatzi")
            return false;
        }
    }
}

function aktibatu() {
    var korreo = document.getElementById("email").value;
    var testua = document.getElementById("texto").value;
    var botoia = document.getElementById("botoia");

    if ((korreo.length == 0) || (testua.length == 0)){
        botoia.setAttribute("disabled", true);
    }
    else{
        botoia.removeAttribute("disabled");
    }
}