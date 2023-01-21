const botao = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const fechar = document.querySelector('.fechar-modal');

botao.addEventListener('click',function(){
    modal.classList.add('aberto');
});

fechar.addEventListener('click', function(){
    if(modal.classList.contains('aberto')){
        modal.classList.remove('aberto')
    }
});