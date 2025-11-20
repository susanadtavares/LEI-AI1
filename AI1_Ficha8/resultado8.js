function calcularMultiplicacao() {
    // Obter valores dos campos de input
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    
    // Validação dos campos com Regex
    if (!validarCampos(valor1, valor2)) {
        return;
    }

    // Realizar a multiplicação
    var resultado = parseFloat(valor1) * parseFloat(valor2);
    document.getElementById('resultado').textContent = resultado;
    limparMensagemDeErro();
}

function calcularDivisao() {
    // Obter valores dos campos de input
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    
    // Validação dos campos com Regex
    if (!validarCampos(valor1, valor2)) {
        return;
    }

    // Garantir que o divisor não seja zero
    if (parseFloat(valor2) === 0) {
        exibirMensagemDeErro("Não é possível dividir por zero!");
        return;
    }

    // Realizar a divisão
    var resultado = parseFloat(valor1) / parseFloat(valor2);
    document.getElementById('resultado').textContent = resultado;
    limparMensagemDeErro();
}

// Função para validar os campos
function validarCampos(valor1, valor2) {
    var regex = /^-?\d+(\.\d+)?$/; // Regex para validar se é um número válido

    // Verificar se os campos não estão vazios e se os valores são válidos
    if (valor1 === "" || valor2 === "") {
        exibirMensagemDeErro("Ambos os campos devem ser preenchidos!");
        return false;
    }
    
    if (!regex.test(valor1) || !regex.test(valor2)) {
        exibirMensagemDeErro("Por favor, insira valores numéricos válidos.");
        return false;
    }

    return true;
}

// Função para exibir mensagem de erro
function exibirMensagemDeErro(mensagem) {
    document.getElementById('error-message').textContent = mensagem;
    document.getElementById('resultado').textContent = "0"; // Limpar o resultado
}

// Função para limpar a mensagem de erro
function limparMensagemDeErro() {
    document.getElementById('error-message').textContent = "";
}
