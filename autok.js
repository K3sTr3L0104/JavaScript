function myFunction(){
    var x = document.getElementById("autok");
    var value = x.options[x.selectedIndex].value;
    var text = x.options[x.selectedIndex].text;
    document.getElementById("valasz1").innerHTML = value;
    document.getElementById("valasz").innerHTML = text;
    return false;
}
function myFunction1(){
    const btn = document.querySelector('#btn');        
    const radioButtons = document.querySelectorAll('input[name="size"]');
    btn.addEventListener("click", () => {
        let selectedSize;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedSize = radioButton.value;
                break;
            }
        }
        // show the output:
        output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
    });
}