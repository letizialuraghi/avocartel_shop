function startCalculator() {
    var input = document.getElementById('input').value;

    // Check if the input is a negative number
    if (input < 0) {
        alert("Per favore inserisci un numero maggiore di 0");
        document.getElementById('input').value = "";
        return;
    }

    var output1 = input * 12500;
    var output2 = input * 1.25;
    var output3 = input * 0.25;
    var output4 = input * 0.1875;
    document.getElementById('output1').innerHTML = output1;
    document.getElementById('output2').innerHTML = output2;
    document.getElementById('output3').innerHTML = output3;
    document.getElementById('output4').innerHTML = output4;
}
