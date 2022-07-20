//Pega o valor do botão pelo Id
const btnMobile = document.getElementById('btn-mobile');

//Cria uma função de eventos
function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        event.currentTarget.setAttribute('aria-expanded', 'true');
}

//Detecção de toques e cliques na tela
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);