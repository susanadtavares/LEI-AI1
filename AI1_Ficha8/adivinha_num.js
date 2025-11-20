// Gera um número aleatório entre 0 e 10
const numeroAleatorio = Math.floor(Math.random() * 11);
console.log("Número aleatório (para testes):", numeroAleatorio);

// Seleciona o input e o botão
const numeroInput = document.getElementById("numeroInput");
const verificarBtn = document.getElementById("verificarBtn");

// Adiciona evento de clique no botão
verificarBtn.addEventListener("click", function() {
    // Obtém o valor do input e converte para número
    const numeroEscolhido = parseInt(numeroInput.value, 10);

    // Verifica se o número é o correto
    if (numeroEscolhido === numeroAleatorio) {
        alert("Parabéns! Você acertou o número!");
        numeroInput.disabled = true; // Desabilita o input ao acertar
    } else {
        alert("Tente novamente!");
        numeroInput.value = ""; // Limpa o input ao errar
    }
});
