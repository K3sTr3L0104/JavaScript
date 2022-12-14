function msToTime(duration) {
    let h,m,s;
    let masodpercek = document.getElementById("masodperc").value;
    h = Math.floor(masodpercek/60/60/60);
    m = Math.floor(masodpercek/60);
    s = Math.floor(masodpercek-(m*60))
    document.getElementById("valasz").innerHTML = `${h}:${m}:${s}`;
    return false
}