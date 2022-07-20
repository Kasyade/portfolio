const button = document.querySelector('btn-mobile');

button.addEventListener('click', function(event){
    document.querySelector('#menu')
        .classList.toggle('fade');
});
