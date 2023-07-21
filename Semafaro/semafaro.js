"use strict";

const buttons = document.getElementById("buttons");
const image = document.getElementById("image");

const image_red = "img/vermelho.png";
const image_yellow = "img/amarelo.png";
const image_green = "img/verde.png";

// variaveis de ambiente

let colorIndex = 0;
let idSetInterval = null;

// função para carregar a imagem que for chamada.
const updateImage = (loadImage) => {
    image.src = loadImage;
};

// função responsavel por capturar o butão que foi clicado e chamar o objeto com a cor correspondendo ao id.
const turnOn = (event) => {
    stopInterval();
    turnColor[event.target.id]();
};

// responsavel por verificar o index do array de colors
const nextTurn = () => (colorIndex < 2 ? colorIndex++ : (colorIndex = 0));

// responsavel por da clear no time do setInterval apos o button ser clicado mais que uma vez não acelerar.
const stopInterval = () => clearInterval(idSetInterval);

// função responsavel por fica alterando as cores a cada segundo.
const colorAutomatic = () => {
    const colors = ["red", "yellow", "green"];
    const color = colors[colorIndex];
    turnColor[color]();
    nextTurn();
};

// objeto literal chamando as imagens para cada target.id correspondete a imagem
const turnColor = {
    red: () => updateImage(image_red),
    yellow: () => updateImage(image_yellow),
    green: () => updateImage(image_green),
    automatic: () => (idSetInterval = setInterval(colorAutomatic, 1000)),
};

// eventos
buttons.addEventListener("click", turnOn);
