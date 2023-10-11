
// FORMULARIO

document.getElementById("email").addEventListener("keypress", function (event) {
    if (comprobaremail(event) == false) {
        event.preventDefault();
    }
});
document.querySelector("form").addEventListener("keyup", aktibatu);
document.querySelector("form").addEventListener("click", aktibatu);
document.getElementById("ezabatu").addEventListener("click", ezabatu);
document.getElementById("bidali").addEventListener("click", bidali);


function ezabatu() {
    document.getElementById("formularioa").reset();
    document.getElementById("texto").value="";
}
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
function radiochecked() {
    var radiotalde = document.getElementsByName("sexua");
    var aukeratua = false;
    for (var i = 0; i < radiotalde.length; i++) {
        if (radiotalde[i].checked) {
            aukeratua = true;
            break;
        }
    }
    return aukeratua;
}
function cheboxcheched() {
    var checktalde = document.getElementsByName("arazoa");
    var aukeratua = false;
    for (var i = 0; i < checktalde.length; i++) {
        if (checktalde[i].checked) {
            aukeratua = true;
            break;
        }
    }
    return aukeratua;
}
function aktibatu() {
    var izena = document.getElementById("izena").value;
    var abizena = document.getElementById("abizena").value;
    var korreo = document.getElementById("email").value;
    var testua = document.getElementById("texto").value;
    var botoia = document.getElementById("bidali");

    if ((korreo.length == 0) || (testua.length == 0) || izena.length == 0 || abizena.length == 0 || !radiochecked() || !cheboxcheched()) {
        botoia.setAttribute("disabled", true);
    }
    else {
        botoia.removeAttribute("disabled");
    }
}
function bidali() {
    alert("Eskerrik asko formularioa betetzeagatik");
}