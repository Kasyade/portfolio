const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('cabecalho-menu');
        nav.classList.toggle('active');
        event.currentTarget.setAttribute('aria-expanded', 'true');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const btnParagrafo = document.getElementById('btn-paragrafo')

function mostra(id){
    if(document.getElementById('conteudo-principal-escrito-paragrafo').style.display == 'block'){
    document.getElementById('conteudo-principal-escrito-paragrafo').style.display = 'none'}
    else(document.getElementById('conteudo-principal-escrito-paragrafo').style.display = 'block');
};

btnParagrafo.addEventListener('click', mostra);
btnParagrafo.addEventListener('touchstart', mostra);
