const images = [
    "images/columbus.jpg", "images/Jesus.jpg", "images/monalisa.jpg", "images/ww1.jpg", "images/ww2.jpg"
];

let cards = [...images, ...images]; // Luo parit
cards.sort(() => Math.random() - 0.5); // Sekoita kortit

const gameBoard = document.getElementById("gameBoard");
const scoreBoard = document.getElementById("scoreBoard");

let flippedCards = [];
let matchedPairs = 0;

function createCard(image) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = image;
    
    const front = document.createElement("div");
    front.classList.add("front");
    
    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${image})`;
    
    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener("click", flipCard);
    return card;
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.classList.add("flipped");
        flippedCards.push(this);
    }
    
    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if (flippedCards[0].dataset.image === flippedCards[1].dataset.image) {
        flippedCards = [];
        matchedPairs++;
        if (matchedPairs === images.length) {
            scoreBoard.textContent = `Peli päättyi, sait ${matchedPairs}/${images.length} pistettä`;
            scoreBoard.style.display = "block";
        }
    } else {
        flippedCards.forEach(card => card.classList.remove("flipped"));
        flippedCards = [];
    }
}

function initGame() {
    gameBoard.innerHTML = "";
    scoreBoard.style.display = "none"; // Piilota pistelaatikko alussa
    matchedPairs = 0; // Nollaa pisteet uutta peliä varten
    cards.forEach(image => gameBoard.appendChild(createCard(image)));
}

initGame();

function peliLoppu() {
    naytaTulos(pisteet);
    peliAlue.style.display = "none";
  
    // Tallennetaan pisteet localStorageen
    localStorage.setItem("peli3_arttuH", pisteet);
  }
