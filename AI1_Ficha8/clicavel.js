let mostrarVerdadeiro = true;

document.getElementById("meuBotao").addEventListener("click", function() {
    if (mostrarVerdadeiro) {
        alert("Verdadeiro");
    } else {
        alert("Falso");
    }
    
    mostrarVerdadeiro = !mostrarVerdadeiro;
});
