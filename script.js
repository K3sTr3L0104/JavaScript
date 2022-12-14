function haromszog() {
    var a = document.getElementById("aOldal").value;
    var b = document.getElementById("bOldal").value;
    var c = document.getElementById("cOldal").value;
    if (a*a+b*b == c*c) {
        document.getElementById("valasz").innerHTML = "A háromszög derékszögű";
    }
    else {
        document.getElementById("valasz").innerHTML = "A háromszög nem derékszögű";
    }
    return false;
}
function haromszoge() {
    var a = document.getElementById("aOldal").value;
    var b = document.getElementById("bOldal").value;
    var c = document.getElementById("cOldal").value;
    if (a + b > c) {
        document.getElementById("valasz1").innerHTML = "Háromszög";
    }
    else {
        document.getElementById("valasz1").innerHTML = "Nem háromszög";
    }
    return false;
}