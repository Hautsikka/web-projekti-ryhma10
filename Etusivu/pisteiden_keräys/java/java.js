const pelit = ["peli1_aleksi_pisteet", "peli2_johannes_pisteet", "peli3_arttuH_pisteet", "peli4_paul_pisteet", "peli5_arttuR_pisteet"];
const pisteLista = document.getElementById("pisteLista");
const kokonaisPisteetEl = document.getElementById("kokonaisPisteet");

let yhteensa = 0;

pelit.forEach((avain, index) => {
  const pisteet = parseInt(localStorage.getItem(avain)) || 0;
  yhteensa += pisteet;

  const li = document.createElement("li");
  li.textContent = `Peli ${index + 1}: ${pisteet} pistettä`;
  pisteLista.appendChild(li);
});

kokonaisPisteetEl.textContent = `Yhteensä: ${yhteensa} / 45`;

function tyhjennäPisteet() {
  pelit.forEach(avain => localStorage.removeItem(avain));
  location.reload();
}
