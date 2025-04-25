document.addEventListener("DOMContentLoaded", function () {
    // Animoitu otsikko (fade-in efekti)
    const title = document.querySelector("h1");
    title.style.opacity = "0";
    title.style.transition = "opacity 2s ease-in-out";
    setTimeout(() => {
        title.style.opacity = "1";
    }, 500);

    // Satunnaiset historian faktat
    const facts = [
        "Ensimmäinen olympialaiset pidettiin vuonna 776 eaa. Olympiassa, Kreikassa.",
        "Leonardo da Vinci piirsi ensimmäisen luonnoksen lentokoneesta 1400-luvulla.",
        "Ensimmäinen tietokoneohjelma kehitettiin Ada Lovelacen toimesta 1800-luvulla.",
        "Gutenbergin kirjapaino mullisti tiedon levittämisen 1400-luvulla.",
        "Ensimmäinen kuu-askel otettiin 20. heinäkuuta 1969."
    ];

    const factBox = document.createElement("div");
    factBox.textContent = "Klikkaa tästä saadaksesi satunnainen historian fakta!";
    factBox.classList.add("factBox"); // Lisää luokka
    document.body.insertBefore(factBox, document.body.children[1]);

    factBox.addEventListener("click", function () {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factBox.textContent = randomFact;
    });
});
