function msToTime() {
    let totalSeconds = document.getElementById("masodperc").value;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    document.getElementById("valasz").innerHTML = hours + ":" + minutes + ":" + seconds;
    return false
}