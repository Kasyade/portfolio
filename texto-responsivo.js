const result = document.querySelector('#result');
const h1 = document.querySelector('#conteudo-principal-escrito-titulo');
const h2 = document.querySelector('#conteudo-principal-escrito-subtitulo');
const p = document.querySelector('#conteudo-principal-escrito-paragrafo');

const checkSizes = () => {
    const h1Styles = window.getComputedStyle(h1);
    const h2Styles = window.getComputedStyle(h2);
    const pStyles = window.getComputedStyle(p);

    const h1FontSize = h1Styles.getPropertyValue('font-size');
    const h2FontSize = h2Styles.getPropertyValue('font-size');
    const pFontSize = pStyles.getPropertyValue('font-size');

//    result.innerText = `O tamanho de fonte do H1 é ${h1FontSize}, o H2 é ${h2FontSize} e o p é ${pFontSize}`;
}

setInterval(checkSizes, 500);