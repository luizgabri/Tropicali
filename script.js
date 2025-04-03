ddocument.addEventListener('DOMContentLoaded',function(){

    const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');
    const opcoesDeAcessbilidade=document.getElementById('opcoes-acessibilidade');
    
    botaoDeAcessibilidade.addEventListener('click',function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessbilidade.classList.toggle('apresenta-lista');
    
    const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')=== 'true';

    botaoDeAcessibilidade.setAttribute('aria-expanded',!botaoSelecionado)

    })
    
    
    const aumentaFontedoBotao = document.getElementsById('aumentar-fonte')
    const diminuiFontedoBotao = document.getElementsById('diminuir-fonte')

    const alternaContraste = document.getElementsById('alterna-fonte')
    })
