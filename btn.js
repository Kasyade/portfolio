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
    if (id.type === 'touchstart') id.preventDefault();
    if(document.getElementById('conteudo-principal-escrito-paragrafo').style.display == 'block'){document.getElementById('conteudo-principal-escrito-paragrafo').style.display = 'none'
    document.getElementById('btn-paragrafo').value="Sim, estou pronto!";
}
    else{(document.getElementById('conteudo-principal-escrito-paragrafo').style.display = 'block');
    document.getElementById('btn-paragrafo').value="Agora sim! :)"};
};

btnParagrafo.addEventListener('click', mostra);
btnParagrafo.addEventListener('touchstart', mostra);
