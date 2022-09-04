var frase = document.getElementById("frase").innerText;

var x = frase.split("\n");

document.getElementById("frase").innerHTML = x[0];
document.getElementById("autor").innerHTML = x[1];