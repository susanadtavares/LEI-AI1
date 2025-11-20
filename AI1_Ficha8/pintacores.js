// Seleciona a div que terá o fundo alterado
const corDiv = document.getElementById("corDiv");

// Seleciona todas as labels que têm a classe "label"
const labels = document.querySelectorAll(".label");

// Adiciona eventos para cada label
labels.forEach(label => {
    // Quando o rato passar por cima da label, muda a cor de fundo da div
    label.addEventListener("mouseover", function() {
        corDiv.style.backgroundColor = label.getAttribute("data-color");
    });

    // Quando o rato sair da label, remove a cor de fundo da div
    label.addEventListener("mouseout", function() {
        corDiv.style.backgroundColor = "";  // Remove a cor de fundo
    });
});
