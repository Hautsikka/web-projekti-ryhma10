document.addEventListener("DOMContentLoaded", function () {
    const kysymykset = [
        { kuva: "../peli1_aleksi/images/kekkonen.jpg", kysymys: "Kalju presidentti silmälaseilla.", vaihtoehdot: ["Urho Kekkonen", "Mauno Koivisto", "Risto Ryti"], oikea: "Urho Kekkonen" },
        { kuva: "../peli1_aleksi/images/hitler.jpg", kysymys: "Saksan johtaja sodan aikana.", vaihtoehdot: ["Adolf Hitler", "Benito Mussolini", "Joseph Stalin"], oikea: "Adolf Hitler" },
        { kuva: "../peli1_aleksi/images/nurmi.jpg", kysymys: "'Lentävä suomalainen', juoksija.", vaihtoehdot: ["Paavo Nurmi", "Lasse Virén", "Hannes Kolehmainen"], oikea: "Paavo Nurmi" },
        { kuva: "../peli1_aleksi/images/stalin.jpg", kysymys: "Neuvostoliiton johtaja sodassa.", vaihtoehdot: ["Joseph Stalin", "Leon Trotski", "Nikita Hruštšov"], oikea: "Joseph Stalin" },
        { kuva: "../peli1_aleksi/images/mannerheim.jpg", kysymys: "Suomen marsalkka.", vaihtoehdot: ["Carl Gustaf Emil Mannerheim", "Adolf Ehrnrooth", "Paavo Talvela"], oikea: "Carl Gustaf Emil Mannerheim" },
        { kuva: "../peli1_aleksi/images/hayha.jpg", kysymys: "Tarkka-ampuja 'Valkoinen kuolema'.", vaihtoehdot: ["Simo Häyhä", "Aarne Juutilainen", "Lauri Törni"], oikea: "Simo Häyhä" },
        { kuva: "../peli1_aleksi/images/lenin.jpg", kysymys: "Neuvostoliiton perustaja.", vaihtoehdot: ["Vladimir Lenin", "Josef Stalin", "Leon Trotski"], oikea: "Vladimir Lenin" },
        { kuva: "../peli1_aleksi/images/lönnrot.jpg", kysymys: "Kalevalan kokoaja.", vaihtoehdot: ["Elias Lönnrot", "Johan Ludvig Runeberg", "Aleksis Kivi"], oikea: "Elias Lönnrot" },
        { kuva: "../peli1_aleksi/images/sibelius.jpg", kysymys: "'Finlandia'-säveltäjä.", vaihtoehdot: ["Jean Sibelius", "Toivo Kuula", "Oskar Merikanto"], oikea: "Jean Sibelius" },
        { kuva: "../peli1_aleksi/images/kivi.jpg", kysymys: "'Seitsemän veljestä' -kirjailija.", vaihtoehdot: ["Aleksis Kivi", "Frans Eemil Sillanpää", "Johan Ludvig Runeberg"], oikea: "Aleksis Kivi" }
    ];

    let nykyinenKysymys = 0;
    let pisteet = 0;

    const henkiloKuva = document.getElementById("henkiloKuva");
    const kysymysTeksti = document.getElementById("kysymysteksti");
    const vaihtoehdotDiv = document.getElementById("vaihtoehdot");
    const seuraavaNappi = document.getElementById("seuraava");
    const peliAlue = document.getElementById("peli-alue");
    const tulokset = document.getElementById("tulokset");
    const pisteetNaytto = document.getElementById("pisteet");
    const etusivu = document.getElementById("etusivu");

    function naytaKysymys() {
        if (nykyinenKysymys >= kysymykset.length) {
            return peliLoppu();
        }

        const kysymys = kysymykset[nykyinenKysymys];

        henkiloKuva.src = kysymys.kuva;
        kysymysTeksti.innerText = kysymys.kysymys;
        vaihtoehdotDiv.innerHTML = "";

        kysymys.vaihtoehdot.sort(() => Math.random() - 0.5).forEach(vaihtoehto => {
            const nappi = document.createElement("button");
            nappi.innerText = vaihtoehto;
            nappi.classList.add("vaihtoehtoNappi");
            nappi.onclick = () => tarkistaVastaus(nappi, vaihtoehto, kysymys.oikea);
            vaihtoehdotDiv.appendChild(nappi);
        });

        seuraavaNappi.style.display = "none";
    }

    function tarkistaVastaus(nappi, valittu, oikeaVastaus) {
        document.querySelectorAll(".vaihtoehtoNappi").forEach(n => n.disabled = true);

        if (valittu === oikeaVastaus) {
            nappi.classList.add("oikea");
            pisteet++;
        } else {
            nappi.classList.add("vaarin");
            document.querySelectorAll(".vaihtoehtoNappi").forEach(n => {
                if (n.innerText === oikeaVastaus) {
                    n.classList.add("oikea");
                }
            });
        }

        seuraavaNappi.style.display = "block";
    }

    function naytaTulos(pisteet) {
        let viesti = "";
        if (pisteet === 10) viesti = "Täydellinen suoritus!";
        else if (pisteet >= 7) viesti = "Hieno suoritus!";
        else if (pisteet >= 4) viesti = "Kohtuullinen suoritus! Harjoitus tekee mestarin!";
        else viesti = "Nyt meni vähän heikommin. Kokeile uudestaan!";

        pisteetNaytto.innerText = `Sait ${pisteet} / 10 oikein!\n${viesti}`;
        tulokset.style.display = "block";
        document.body.classList.add("popup-open");
    }

    function aloitaPeli() {
        pisteet = 0;
        nykyinenKysymys = 0;
        etusivu.style.display = "none";
        tulokset.style.display = "none";
        peliAlue.style.display = "block";
        naytaKysymys();
    }

    function seuraavaKysymys() {
        nykyinenKysymys++;
        naytaKysymys();
    }

    function peliLoppu() {
        naytaTulos(pisteet);
        peliAlue.style.display = "none";
    
        // Tallennetaan pisteet localStorageen
        localStorage.setItem("peli1_aleksi", pisteet);
    }
    
    

    document.getElementById("aloita").addEventListener("click", aloitaPeli);
    document.getElementById("uudestaan").addEventListener("click", aloitaPeli);
    seuraavaNappi.addEventListener("click", seuraavaKysymys);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && seuraavaNappi.style.display === "block") {
            seuraavaKysymys();
        }
    });
});
