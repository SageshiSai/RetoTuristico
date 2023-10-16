var kidsprice = 20;
var adultsprice = 30;


document.querySelectorAll(".hover-btn").forEach((hb) => {
    hb.addEventListener("click", erakutsi)
});
document.getElementById("entadults").addEventListener("keyup", calcularprecio);
document.getElementById("entkids").addEventListener("keyup", calcularprecio);

document.getElementById("entadults").addEventListener("keypress", function (event){
    if (comprobarnumeros(event) == false){
        event.preventDefault();
    }
});

document.getElementById("entkids").addEventListener("keypress", function (event){
    if (comprobarnumeros(event) == false){
        event.preventDefault();
    }
});

function comprobarnumeros(e){
    if (e.key < 48 || e.key > 57){
        return true;
    }
    else{
        alert("Zenbakiak bakarrik sartu ahal dira");
        return false;
    }
}

function erakutsi() {
    document.getElementById("erosketak").style.display = "block";
    document.getElementById("erosketak").scrollIntoView({behavior: "smooth"});
}

function calcularprecio() {
    var guztira = 0;
    var cantadults;
    var cantkids;
    var descuento = 1;
    var canttotal;
    var mostrardescuento = "0%";
    cantadults = parseInt(document.getElementById("entadults").value);
    cantkids = parseInt(document.getElementById("entkids").value);
    if (isNaN(cantadults)) {
        cantadults = 0;
    }
    if (isNaN(cantkids)) {
        cantkids = 0;
    }
    canttotal = cantkids + cantadults;
    if (!isNaN(cantadults) && !isNaN(cantkids)) {
        //15 --> %5
        //40 --> %10
        //60 --> %20
        if (canttotal >= 15 && canttotal <40) {
            descuento = 0.95;
            mostrardescuento ="%5"
        }
        else if (canttotal >= 40 && canttotal <60) {
            descuento = 0.9;
            mostrardescuento ="%10"
        }
        else if (canttotal >= 60) {
            descuento = 0.8;
            mostrardescuento ="%20"
        }
        guztira = (((cantadults * adultsprice) + (cantkids * kidsprice)) * descuento);
    }
    document.getElementById("total").value = guztira + "€" + " -"+mostrardescuento;
    document.getElementById("preciotooltip").setAttribute("data-tooltip", "Total: "+guztira+"€")
}

function realizarcompra() {

}