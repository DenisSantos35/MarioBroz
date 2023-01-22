
/*const botao = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const fechar = document.querySelector('.fechar-modal');

botao.addEventListener('click',function(){
    modal.classList.add('aberto');
});

fechar.addEventListener('click', function(){
    if(modal.classList.contains('aberto')){
        modal.classList.remove('aberto')
    }
});*/

/*
class Iteracao{
    constructor(){
        this.botao = document.querySelector('.botao-trailer');
        this.modal = document.querySelector('.modal');  
        this.fechar = document.querySelector('.fechar-modal');  
        this.video = document.querySelector('#video'); 
        this.url = this.video.src
        this.clickBotaoAbrir();        
    }   
    clickBotaoAbrir(){
        this.botao.addEventListener('click', () => {
            this.criaClasse();
        })
    }

    criaClasse(){
        this.modal.classList.add('aberto')
        this.video.setAttribute('src', this.url);
        this.clickBotaoFechar() ;       
    }
    
    clickBotaoFechar(){
        this.fechar.addEventListener('click', ()=>{
            this.deletarClasse();
        })
    }
    deletarClasse(){
            this.modal.classList.remove('aberto')
            this.video.setAttribute('src', '')
    }
}

const iteracaoMario = new Iteracao();
*/



const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const fecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const linkVideo = video.src

function incluiExcluiClasse(){
    return modal.classList.toggle('aberto')
}

botaoTrailer.addEventListener('click', () => {
    //modal.classList.add('aberto'); //adiciona classe aberto no parametro que contem o modal
    incluiExcluiClasse();
    video.setAttribute("src", linkVideo);
    console.log(modal)
})

fecharModal.addEventListener('click', () => {
    //modal.classList.remove('aberto'); //remove a classe aberto dos parametros que contem o modal
    incluiExcluiClasse();
    video.removeAttribute('src')
    
})
