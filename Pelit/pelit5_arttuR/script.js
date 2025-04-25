const questions = [
    { question: "Minä vuonna toinen maailmansota alkoi?", answers: ["1914", "1939", "1945", "1923"], correct: 1 },
    { question: "Kuka oli Rooman ensimmäinen keisari?", answers: ["Julius Caesar", "Augustus", "Nero", "Hadrianus"], correct: 1 },
    { question: "Mikä maa lähetti ensimmäisen ihmisen avaruuteen?", answers: ["USA", "Neuvostoliitto", "Kiina", "Saksa"], correct: 1 },
    { question: "Mikä kaupunki oli Neuvostoliiton pääkaupunki ennen Moskovaa?", answers: ["Leningrad", "Pietari", "Kiova", "Minsk"], correct: 1 },
    { question: "Kuka kirjoitti Suomen kansalliseepoksen Kalevalan?", answers: ["Aleksis Kivi", "Johan Ludvig Runeberg", "Elias Lönnrot", "Eino Leino"], correct: 2 },
    { question: "Mikä valtio hajosi vuonna 1991 ja jakautui 15 itsenäiseksi valtioksi?", answers: ["Jugoslavia", "Tšekkoslovakia", "Neuvostoliitto", "Itävalta-Unkari"], correct: 2 },
    { question: "Kuka oli Yhdysvaltojen ensimmäinen presidentti?", answers: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], correct: 2 },
    { question: "Minä vuonna Berliinin muuri murtui?", answers: ["1985", "1989", "1991", "1995"], correct: 1 },
    { question: "Mikä oli keskiajalla tärkein uskonto Euroopassa?", answers: ["Islam", "Buddhalaisuus", "Kristinusko", "Hindulaisuus"], correct: 2 },
    { question: "Mikä oli antiikin Kreikan tärkein urheilutapahtuma?", answers: ["Rooman gladiaattoritaistelut", "Olympialaiset", "Triumfijuhlat", "Hippodromikisat"], correct: 1 }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
    const q = questions[currentQuestionIndex];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersEl.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.classList.add("hidden");
    answersEl.classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultEl.classList.remove("hidden");
    resultEl.textContent = `Peli päättyi! Sait ${score}/${questions.length} pistettä.`;
}

showQuestion();