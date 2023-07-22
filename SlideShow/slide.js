" use strick";

const previous = document.getElementById("previous");
const next = document.getElementById("next");

const images = [
    { id: "1", url: "img/chrono.jpg" },
    { id: "2", url: "img/inuyasha.jpg" },
    { id: "3", url: "img/ippo.png" },
    { id: "4", url: "img/tenchi.jpg" },
    { id: "5", url: "img/tenjhotenge.jpg" },
    { id: "6", url: "img/yuyuhakusho.jpg" },
];

const containerItens = document.querySelector("#slide-itens");

const loadImage = (images, container) => {
    images.forEach((image) => {
        container.innerHTML += `
                <div class="item">
                    <img src="${image.url}" 
                </div>
        `;
    });
};

loadImage(images, containerItens);

let itens = document.querySelectorAll(".item");

const previousImage = () => {
    containerItens.appendChild(itens[0]);
    itens = document.querySelectorAll(".item");
};

const nextImage = () => {
    let lastItem = itens[itens.length - 1];
    containerItens.insertBefore(lastItem, itens[0]);
    itens = document.querySelectorAll(".item");
};

previous.addEventListener("click", previousImage);''
next.addEventListener("click", nextImage);
