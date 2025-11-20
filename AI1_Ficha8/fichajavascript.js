// Função que será chamada assim que a página for carregada
window.onload = function() {
    // Animação de fade-in para o título
    let titulo = document.querySelector('h1');
    titulo.style.opacity = 0;
    titulo.style.transition = 'opacity 1s';
    setTimeout(function() {
        titulo.style.opacity = 1;
    }, 100);
    
    // Mensagem de boas-vindas ao carregar a página
    alert("Bem-vindo à página de exercícios de JavaScript!");
    
    // Adicionar efeito de hover nos links
    let links = document.querySelectorAll('.exercicio a');
    links.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            link.style.backgroundColor = '#45a049'; // Altera a cor do fundo ao passar o mouse
        });
        link.addEventListener('mouseleave', function() {
            link.style.backgroundColor = '#4CAF50'; // Restaura a cor original
        });
    });
};
