let converteNum = 0;

    const qntddCartas = prompt("Digite a quantidade des cartas que deseja jogar (de 4 a 14 somente pares:");

    converteNum = Number(qntddCartas);    

    while(converteNum < 4 || converteNum > 14 || converteNum%2 !== 0){
        converteNum = prompt("Caractere inválido, por favor escolha a quantidade de cartas (de 4 a 14 e somente pares):");

        converteNum = Number(converteNum);
    } 
    
    

const elemento = document.querySelector('.jogo');
console.log(elemento);



let arrayImagens =[`bobrossparrot`,`explodyparrot`,`fiestaparrot`,`metalparrot`,`revertitparrot`,`tripletsparrot`,`unicornparrot`];

// array que cria posições dos vetores
let arrayNum=[];
for(i=0; i<(converteNum/2);i++){
    arrayNum.push(i);
    arrayNum.push(i);
}
console.log(arrayNum);
// embaralhador de cartas
arrayNum.sort(comparador); 

function comparador() { 
	return Math.random() - 0.5; 
}
console.log(arrayNum);

let NovoArrayImagens = [];
for(j=0; j < arrayNum.length; j++){
    NovoArrayImagens.push(arrayImagens[arrayNum[j]])
}
console.log(NovoArrayImagens);

//distribuição das cartas
let contador = 1;
let index = 0;
while(converteNum >= contador){
    
    elemento.innerHTML = elemento.innerHTML + `<div class = "carta" onclick = "clicaCarta(this)" data-character ="${NovoArrayImagens[index]}">
    <div class="frente "><img src="./imagens/front.png"></div>
    <div class = "tras "><img src="./imagens/${NovoArrayImagens[index]}.gif"></div></div>`;
    contador++;
    index++;
    
    
}

let primeiraCarta = '';
let segundaCarta = '';
let jogadas = 0;
function clicaCarta(carta){
    const efeitoVirar = carta;

        if(carta.className.includes("virar")){
            return;
        }
    
    if(primeiraCarta === ''){
       
    efeitoVirar.classList.add('virar');
    primeiraCarta = carta;
    } else if(segundaCarta === ''){
       
        efeitoVirar.classList.add('virar');
        segundaCarta = carta;
        }
        jogadas++;
        cofereCartas();
    }

    function cofereCartas(){
        const primeiraImagem = primeiraCarta.getAttribute('data-character');
        const segundaImagem = segundaCarta.getAttribute('data-character');
       
        if(primeiraImagem === segundaImagem){
            primeiraCarta = '';
            segundaCarta = '';
            setTimeout(() => {

                finalizaJogo();

            }, 300)
            

        } else {

            setTimeout(() =>    {
            primeiraCarta.classList.remove("virar");
            segundaCarta.classList.remove("virar");

            primeiraCarta = '';
            segundaCarta = '';

        }, 1000);

            
        
        }
    }
    let mudaTempo=0;
function timer(){
    let tempo = document.querySelector(".timer");
    tempo.innerHTML = Number(tempo.innerHTML) + 1;
    mudaTempo = tempo.innerHTML;
}
setInterval(timer, 1000);
    
    function finalizaJogo(){
        const cartasViradas = document.querySelectorAll(".virar");
        let pergunta;
        if(cartasViradas.length === converteNum ){
            alert(`Você ganhou em ${jogadas} jogadas e em ${mudaTempo} segundos!`);
            pergunta = prompt('Deseja jogar outra partida? (responda com sim ou não)');
            pergunta.toLowerCase();
            pergunta.normalize('NFD');
            if(pergunta === "nao"){
         
                return;
            } else if(pergunta === "sim"){
                document.location.reload(true);
            } else{alert('Comando inválido')}

            

            
        }
    }
    


   




 


