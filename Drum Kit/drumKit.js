"use strict";

const sons = {
    A: "boom.wav",
    S: "clap.wav",
    D: "hihat.wav",
    F: "kick.wav",
    G: "openhat.wav",
    H: "ride.wav",
    J: "snare.wav",
    K: "tink.wav",
    L: "tom.wav",
};

// função responsavel por criar div.
const criarDiv = (text) => {
    const div = document.createElement("div");
    div.classList.add("key");
    div.textContent = text;
    div.id = text;
    document.getElementById("container").appendChild(div);
};

// exibir sons

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
};

const adicionarEfeito = (letra) => document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove("active");
    div.addEventListener("transitionend", removeActive);
};

const ativarDiv = (event) => {
    const letra = event.target.id;
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
};

const AtivarDivTeclado = (event) => {
    const letra = event.key.toUpperCase();
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
};

exibir(sons);
document.querySelectorAll(".key").forEach((el) => {
    el.addEventListener("click", ativarDiv);
});

document.addEventListener("keydown", AtivarDivTeclado);
