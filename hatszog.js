function hatszog() {
    var a = document.getElementById("oldal").value;
    var terulet = (3*Math.sqrt(3)/2)*a*a;
    document.getElementById("megjelenites").innerHTML = "A hatszög területe:"+terulet;
    return false
}