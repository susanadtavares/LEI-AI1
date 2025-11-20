let score = 0;
let answeredQuestions = 0;
const totalQuestions = document.querySelectorAll(".question").length;

// Função para mostrar mensagens temporárias
function showFeedback(message) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = message;
    feedback.classList.remove("hidden");

    setTimeout(() => {
        feedback.classList.add("hidden");
    }, 2000);
}

// Adiciona o evento de clique em todas as respostas
document.querySelectorAll(".question").forEach((question) => {
    const answers = question.querySelectorAll(".answer");
    const correctIndex = parseInt(question.getAttribute("data-correct"));

    answers.forEach((answer, index) => {
        answer.addEventListener("click", () => {
            // Se já foi respondida, não faz nada
            if (question.classList.contains("answered")) return;

            // Marca como respondida
            question.classList.add("answered");
            answeredQuestions++;

            // Lógica para resposta correta ou errada
            if (index === correctIndex) {
                score += 5;
                answer.classList.add("correct");
                showFeedback("Resposta correta!");
            } else {
                score -= 2;
                answer.classList.add("wrong");
                answers[correctIndex].classList.add("correct");
                showFeedback("Resposta errada!");
            }

            // Se todas as perguntas foram respondidas, mostra o botão
            if (answeredQuestions === totalQuestions) {
                document.getElementById("finalize").classList.remove("hidden");
            }
        });
    });
});

// Finalizar o quiz
document.getElementById("finalize").addEventListener("click", () => {
    const replay = confirm(`Sua pontuação final é ${score}. Deseja jogar novamente?`);
    if (replay) {
        window.location.reload();
    }
});
