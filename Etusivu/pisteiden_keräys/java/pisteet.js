// Pelien tiedot
const pelit = [
  { nimi: "Peli 1 (Aleksi)", avain: "peli1_aleksi", max: 10 },
  { nimi: "Peli 2 (Johannes)", avain: "peli2_johannes", max: 10 },
  { nimi: "Peli 3 (Arttu H)", avain: "peli3_arttuH", max: 5 },
  { nimi: "Peli 4 (Paul)", avain: "peli4_paul", max: 10 },
  { nimi: "Peli 5 (Arttu R)", avain: "peli5_arttuR", max: 10 }
];

let yhteispisteet = 0;
let maksimipisteet = 0;
const lista = document.getElementById("pisteLista");

// Haetaan pisteet localStoragesta ja näytetään ne
pelit.forEach(peli => {
  const pisteet = parseInt(localStorage.getItem(peli.avain)) || 0;
  yhteispisteet += pisteet;
  maksimipisteet += peli.max;

  const li = document.createElement("li");
  li.innerHTML = `${peli.nimi}: <span class="pisteet">${pisteet} / ${peli.max}</span>`;
  lista.appendChild(li);
});

// Näytetään yhteispisteet
document.getElementById("kokonaisPisteet").textContent = `Yhteensä: ${yhteispisteet} / ${maksimipisteet}`;
