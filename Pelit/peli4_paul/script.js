// Kuvan valinta koodi sekä vaihtoehto koodi
const questions = [
    {
        image: ('images/WPQ 1.jpg'),
        options: ["Maailman ensimmäinen radio", "Maailman turvallisin kassakaappi", "Maailman ensimmäinen tietokone"],
        correct: "Maailman ensimmäinen tietokone"
    },
    {
        image: ('images/WPQ 2.jpg'),
        options: ["Iwo Jiman taistelu", "USA liputus päivä", "Kukkulan valloitus"],
        correct: "Iwo Jiman taistelu"
    },
    {
        image: ('images/WPQ 3.jpg'),
        options: ["Incheonin maihinnousu", "Normandian maihinnousu", "Gallipolin maihinnousu"],
        correct: "Normandian maihinnousu"
    },
    {
        image: ('images/WPQ 4.jpg'),
        options: ["Ensimmäisen ilmalaivan tuho", "Zeppelinin sabotaasi", "Hindenburging onnettomuus"],
        correct: "Hindenburging onnettomuus"
    },
    {
        image: ('images/WPQ 5.jpg'),
        options: ["Neuvostoliiton ensimmäinen kuu kävely", "Ensimmäinen miehitetty avaruusmatka", "Maailman ensimmäinen kuu kävely"],
        correct: "Maailman ensimmäinen kuu kävely"
    },
    {
        image: ('images/WPQ 6.jpg'),
        options: ["Dachau", "Berliinin muuri", "Auschwitz"],
        correct: "Auschwitz"
    },
    {
        image: ('images/WPQ 7.jpg'),
        options: ["Maailman ensimmäinen torpeedo", "Fat man ydinpommi", "Little boy ydinpommi"],
        correct: "Little boy ydinpommi"
    },
    {
        image: ('images/WPQ 8.jpg'),
        options: ["Maailman ensimmäinen meri onnettomuus", "Francesco uppoaminen", "Titanicin uppoaminen"],
        correct: "Titanicin uppoaminen"
    },
    {
        image: ('images/WPQ 9.jpg'),
        options: ["Maailman ensimmäinen tietokone", "Maailman ensimmäinen puhelin", "Maailman ensimmäinen radio"],
        correct: "Maailman ensimmäinen radio"
    },
    {
        image: ('images/WPQ 10.jpg'),
        options: ["Einsteinin liidin", "Michelangelon taideteos", "Maailman ensimmäinen lentokone"],
        correct: "Maailman ensimmäinen lentokone"
    }
];

let currentIndex = 0;
let score = 0;

const imageEl = document.getElementById("question-image");
const optionButtons = document.querySelectorAll(".option-btn");
const scoreEl = document.getElementById("score");
const resultScreen = document.getElementById("result-screen");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");
const optionsContainer = document.getElementById("options");
// Vastauksien järjestyksen randomisointi koodi
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
// Kysymys koodi
function showQuestion() {
    const q = questions[currentIndex];

    imageEl.src = q.image;
    imageEl.style.display = "block";
    optionsContainer.style.display = "flex";

    const shuffled = shuffle([...q.options]);

    optionButtons.forEach((btn, i) => {
        btn.textContent = shuffled[i];
        btn.style.display = "inline-block";
        btn.onclick = () => handleAnswer(shuffled[i] === q.correct);
    });
}
// Oikeasta vastauksesta pisteen saamis koodi
function handleAnswer(isCorrect) {
    if (isCorrect) {
        score++;
        scoreEl.textContent = score;
    }

    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}
// Loppu viesti koodi
function showResult() {
    imageEl.style.display = "none";
    document.getElementById("options").style.display = "none";
    resultScreen.style.display = "block";
    
    const finalMessageEl = document.getElementById("final-message");
    const finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = score;

    finalMessageEl.classList.remove("result-low", "result-medium", "result-high");

    if (score < 3) {
        finalMessageEl.classList.add("result-low");
    } else if (score < 6) {
        finalMessageEl.classList.add("result-medium");
    } else if (score > 7) {
        finalMessageEl.classList.add("result-high");
    }
}



// Uudelleen yrittämis koodi
restartBtn.onclick = () => {
    currentIndex = 0;
    score = 0;
    scoreEl.textContent = score;
    resultScreen.style.display = "none";

    imageEl.style.display = "block";
    optionsContainer.style.display = "flex";

    optionButtons.forEach(btn => {
        btn.style.display = "inline-block";
    });

    showQuestion();
};

// Aloitus ruutu koodi
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    showQuestion();
});

initGame();

// Peli loppuu, näyttää tuloksen ja tallentaa pisteet localStorageen
function peliLoppu() {
    naytaTulos(matchedPairs);  // Näytä peli loppu tulokset, käytä matchedPairs pistemääränä
    peliAlue.style.display = "none";
  
    // Tallennetaan matchedPairs localStorageen
    localStorage.setItem("peli4_paul", matchedPairs);
}

