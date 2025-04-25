const events = {
  "Saksan hyökkäys Puolaan": { year: 1939, image: "images/Puola.bob.jpg" },
  "Pearl Harborin hyökkäys": { year: 1941, image: "images/pearl.bob.jpg" },
  "Normandian maihinnousu": { year: 1944, image: "images/maihinnousu.jpg" },
  "Hiroshiman atomipommi": { year: 1945, image: "images/hiroshima.jpg" },
  "Saksan antautuminen": { year: 1945, image: "images/saksan_antautuminen.jpg" },
  "Barbarossa-suunnitelma": { year: 1941, image: "images/barbarossa.jpg" },
  "Stalingradin taistelun päättyminen": { year: 1943, image: "images/stalingrad.jpg" },
  "Yhdistyneiden kansakuntien perustaminen": { year: 1945, image: "images/un.jpg" },
  "Hitlerin kuolema": { year: 1945, image: "images/hitler.jpg" },
  "Neuvostoliiton hyökkäys Suomeen": { year: 1941, image: "images/jatkosota.jpg" },
  "Toisen maailmansodan päättyminen Euroopassa": { year: 1945, image: "images/ve_day.jpg" }
};

let score = 0;
let questionCount = 0;
let maxQuestions = 10;
let currentEvent = "";
let currentYear = 0;
let remainingEvents = [];

function updateScore() {
    document.getElementById("score").innerText = "Pisteet: " + score;
}

function nextQuestion() {
    if (questionCount < maxQuestions && remainingEvents.length > 0) {
        let randomIndex = Math.floor(Math.random() * remainingEvents.length);
        currentEvent = remainingEvents[randomIndex];
        currentYear = events[currentEvent].year;
        let currentImage = events[currentEvent].image;
        document.getElementById("event").innerText = "Milloin tapahtui: " + currentEvent + "?";
        document.getElementById("eventImage").src = currentImage;
        document.getElementById("year").value = "";
        document.getElementById("result").innerText = "";
        document.getElementById("next").disabled = true;
        remainingEvents.splice(randomIndex, 1);
        questionCount++;
    } else {
        // Peli päättyy, näytä tulokset
        peliLoppu(); // Kutsutaan peliLoppu funktiota
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("year").value);
    let resultText = "";
    if (userAnswer === currentYear) {
        resultText = "Oikein!";
        score++;
    } else {
        resultText = "Väärin! Oikea vastaus: " + currentYear;
    }
    document.getElementById("result").innerText = resultText;
    document.getElementById("next").disabled = false;
    updateScore();
}

function startGame() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("game").style.display = "block";
    score = 0;
    questionCount = 0;
    remainingEvents = Object.keys(events);
    document.getElementById("score").textContent = "Pisteet: 0";
    document.getElementById("year").style.display = "inline";
    document.getElementById("next").style.display = "inline";
    nextQuestion();
}

function restartGame() {
    score = 0;
    questionCount = 0;
    remainingEvents = Object.keys(events);
    document.getElementById("score").textContent = "Pisteet: 0";
    document.getElementById("result").textContent = "";
    document.getElementById("year").value = "";
    document.getElementById("year").style.display = "inline";
    document.getElementById("next").style.display = "inline";
    nextQuestion();
    document.getElementById("next").disabled = true;
    document.getElementById("game").style.display = "block";
}

// Peli loppuu, tallennetaan pistemäärä
function peliLoppu() {
    // Tallennetaan pistemäärä localStorageen avaimella "peli2_johannes"
    localStorage.setItem("peli2_johannes", score);
    
    // Näytetään peli loppu tulos
    document.getElementById("event").innerText = "Peli päättyi! Pisteet: " + score + "/" + maxQuestions;
    
    // Piilotetaan syöttökenttä ja seuraava-painike
    document.getElementById("year").style.display = "none";
    document.getElementById("next").style.display = "none";
}

window.onload = function() {
    document.getElementById("startButton").onclick = startGame;
};


