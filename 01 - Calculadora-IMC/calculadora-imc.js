'use strict'

const calcular = document.getElementById ( 'calcular' );
const result = document.getElementById ( 'result' );


const calcularImc = () => {
    const nome = document.getElementById( 'nome' ).value;
    const altura = document.getElementById( 'altura' ).value;
    const peso = document.getElementById( 'peso' ).value;


    if(nome !== '' && peso !== '' && altura !== ''){
        const valorIMC = (peso / Math.pow(altura ,  2)).toFixed(1);
        let classificacao = ' ';


        if(valorIMC < 16.9){
            classificacao = 'Muito abaixo do peso';
        } else if (valorIMC < 18.4) {
            classificacao =  'Abaixo do peso';
        } else if ( valorIMC < 24.9) {
            classificacao = 'Peso normal';
        } else if ( valorIMC < 29.9){
            classificacao = 'Acima do peso';
        } else if ( valorIMC < 34.9){
            classificacao = 'Obesidade grau I';
        } else if ( valorIMC < 40) {
            classificacao =  'Obesidade grau II';
        } else {
            classificacao = 'Obesidade grau III'
        }

        result.textContent = `${nome} seu IMC é de ${valorIMC} e você está ${classificacao}`
    }else {
        alert( 'Campos vazios preencher todos e tente novamente!' )
    }
};

calcular.addEventListener ( 'click' , calcularImc )