ddocument.addEventListener('DOMContentLoaded',function(){

    const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');
    const opcoesDeAcessbilidade=document.getElementById('opcoes-acessibilidade');
    
    botaoDeAcessibilidade.addEventListener('click',function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessbilidade.classList.toggle('apresenta-)lista');
    
    const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')=== 'true';

    botaoDeAcessibilidade.setAttribute('aria-expanded',!botaoSelecionado)

    })
    
    const aumentaFontedoBotao = document.getElementsById('aumentar-fonte')
    const diminuiFontedoBotao = document.getElementsById('diminuir-fonte')

    const alternaContraste = document.getElementsById('alterna-fonte')

    letTamnhoAtualFont = 1;

    aumentaFonteBotao.addEventListener ('clik', function(){
      tananhoAtualFont += 0.1;
      document.body.style.fontSize = `${tamanhoAtualFont}rem`
    })

    aumentaFonteBotao.addEventListener ('clik', function(){
        tananhoAtualFont += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFont}rem`
      })

    alternaContraste.addEventListener('clik', function(){
        document.body.classList.toggle('altoContraste')
    })
})

ScrollReveal().reveal('#inicio',{delay: 500});
 ScrollReveal().reveal('#tropicalia',{delay: 500});
 ScrollRevea().reveal('#galeria',{delay: 500});
 ScrollReveal().reveal('#contato',{delay: 500});