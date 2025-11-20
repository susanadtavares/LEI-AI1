// 1) Utilizando if... else if...

let diaIndex = 0;

document.getElementById("meuBotao").addEventListener("click", function() {
    if (diaIndex === 0) {
        alert("Domingo");
    } else if (diaIndex === 1) {
        alert("Segunda");
    } else if (diaIndex === 2) {
        alert("Terça");
    } else if (diaIndex === 3) {
        alert("Quarta");
    } else if (diaIndex === 4) {
        alert("Quinta");
    } else if (diaIndex === 5) {
        alert("Sexta");
    } else if (diaIndex === 6) {
        alert("Sábado");
    }
    
    diaIndex = (diaIndex + 1) % 7;
});


// 2) Utilizando um array

/**
 * let diaIndex = 0;
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

document.getElementById("meuBotao").addEventListener("click", function() {
    // Exibe o dia da semana atual com base no índice
    alert(diasDaSemana[diaIndex]);
    
    // Incrementa o índice e volta ao início se for sábado
    diaIndex = (diaIndex + 1) % diasDaSemana.length;
});
 */