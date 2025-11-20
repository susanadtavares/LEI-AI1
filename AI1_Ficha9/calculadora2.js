// Funções para cada operação
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero";
    }
    return a / b;
}

// Função principal para calcular com atraso
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const operation = document.getElementById("operation").value.toLowerCase();
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultElement = document.getElementById("result");

    // Exibe a mensagem de "A calcular a sua operação"
    resultElement.textContent = "A calcular a sua operação...";

    // Define o callback para calcular o resultado após 3 segundos
    setTimeout(() => {
        let result;
        switch (operation) {
            case "add":
                result = add(num1, num2);
                break;
            case "sub":
                result = sub(num1, num2);
                break;
            case "mult":
                result = mult(num1, num2);
                break;
            case "divide":
                result = divide(num1, num2);
                break;
            default:
                result = "Operação inválida! Use: add, sub, mult ou divide.";
        }

        // Exibe o resultado após o delay
        resultElement.textContent = `O resultado da sua conta é = ${result}`;
    }, 3000); // 3000 milissegundos = 3 segundos
}
