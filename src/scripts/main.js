document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    // 1. Lógica das Abas (Seção Shows)
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // 2. Lógica do FAQ (Sanfona/Acordeon de Perguntas)
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

// Função auxiliar para esconder as abas de episódios
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

// Função auxiliar para remover a linha preta sob o botão ativo
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

// Função para alternar o FAQ (Bazinga!)
function abreOuFechaResposta(elemento) {
    const classeItemAberto = 'faq__questions__item--is-open';
    // Pega o elemento pai (o <li>) para colocar ou tirar a classe de aberto
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classeItemAberto);
}