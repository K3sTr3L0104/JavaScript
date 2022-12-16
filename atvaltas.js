function valtas() {
    var meter = document.getElementById("meter").value;
    var lab = document.getElementById("kiiras1").innerHTML = "Lábban: "+meter*3.28;
    var merfold = document.getElementById("kiiras2").innerHTML ="Mérföldben: "+meter*0.00062137;
    var km = document.getElementById("kiiras3").innerHTML = "Kilóméterben: "+meter*0.001;
    var yard = document.getElementById("kiiras4").innerHTML = "Yardban: "+meter*1.0936;
    var inch = document.getElementById("kiiras5").innerHTML = "Inchben: "+meter*39.37007874;
    return false
}