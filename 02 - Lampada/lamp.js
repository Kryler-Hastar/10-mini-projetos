" use strict";

const image = document.getElementById("image");
const turnOnOff = document.getElementById("turnOnOff");

const image_ligada = "img/ligada.jpg";
const image_desligado = "img/desligada.jpg";
const image_quebrada = "img/quebrada.jpg";

// variaveis de ambiente

let lampIsBroken = false;

const updateImage = (loadImage) => {
    image.src = loadImage;
};

const lampOn = () => {
    if (!lampIsBroken) {
        updateImage(image_ligada);
    }
};
const lampOff = () => {
    if (!lampIsBroken) {
        updateImage(image_desligado);
    }
};
const lampBroken = () => {
    updateImage(image_quebrada);
    turnOnOff.textContent = "Quebrado";
    lampIsBroken = true;
};

const checkTurn = () => {
    if (turnOnOff.textContent == "Ligar") {
        lampOn();
        turnOnOff.textContent = "Desligar";
    } else {
        lampOff();
        turnOnOff.textContent = "Ligar";
    }
};



turnOnOff.addEventListener("click", checkTurn);
image.addEventListener("dblclick", lampBroken);
image.addEventListener("mouseover", lampOn);
image.addEventListener("mouseleave", lampOff);
