let converteNum = 0;

    const qntddCartas = prompt("Digite a quantidade des cartas que deseja jogar (de 4 a 14 somente pares:");

    converteNum = Number(qntddCartas);    

    while(converteNum < 4 || converteNum > 14 || converteNum%2 !== 0){
        converteNum = prompt("Caractere inválido, por favor escolha a quantidade de cartas (de 4 a 14 e somente pares):");

        converteNum = Number(converteNum);
    } 
    
    

const elemento = document.querySelector('.jogo');
console.log(elemento);



let arrayImagens =[`<img src="./imagens/bobrossparrot.gif">`,`<img src="./imagens/explodyparrot.gif">`,`<img src="./imagens/fiestaparrot.gif">`,`<img src="./imagens/metalparrot.gif">`,`<img src="./imagens/revertitparrot.gif">`,`<img src="./imagens/tripletsparrot.gif">`,`<img src="./imagens/unicornparrot.gif">`];

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
    
    elemento.innerHTML = elemento.innerHTML + `<div class="card${contador}" onclick = "clicaCarta(this)"><img src="./imagens/front.png">
    <div class = "nova-imagem esconder">${NovoArrayImagens[index]}</div></div>`;
    contador++;
    index++;
    
}

 
//let arrayCartas = document.querySelectorAll(".nova-imagem");
//console.log(arrayCartas);




//let arrayImagens =[`<img src="./imagens/bobrossparrot.gif">`,`<img src="./imagens/explodyparrot.gif">`,`<img src="./imagens/fiestaparrot.gif">`,`<img src="./imagens/metalparrot.gif">`,`<img src="./imagens/revertitparrot.gif">`,`<img src="./imagens/tripletsparrot.gif">`,`<img src="./imagens/unicornparrot.gif">`];
//let novoArray = []
//const dividePor2 = converteNum/2;
//novoArray.push(arrayImagens[dividePor2]);
//function clicaCarta(recebeClass){
    //contador = 1;
    //let index = 0;
    //for(contador = 1; converteNum >= contador; contador++){
   //     recebeImagem = document.querySelector(`.card${contador}`);
   // recebeImagem.innerHTML = arrayImagens[index];
   // contador ++;
   //  recebeImagem = document.querySelector(`.card${contador}`);
  //  recebeImagem.innerHTML = arrayImagens[index];
   // index++;
   // }   

//}
