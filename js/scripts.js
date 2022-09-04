var frase = document.getElementById("frase").innerText;

var x = frase.split("\n");

document.getElementById("frase").innerHTML = x[0];
document.getElementById("autor").innerHTML = x[1];


function takeshot() {
    let div =
        document.getElementById('card');

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div).then(
        function (canvas) {
            document
            .getElementById('output')
            .appendChild(canvas);
        })
}