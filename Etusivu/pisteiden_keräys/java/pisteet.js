// Haetaan pelin nimi HTML:n body-elementistä
const pelinNimi = document.body.dataset.pelinNimi;

// Pistelaskuri
let pisteet = 0;

// Pelaaja vastaa oikein
function pelaajaVastasiOikein() {
  pisteet += 1; // Lisää yksi piste
}

// Pisteiden tallennus
function tallennaPisteet() {
  localStorage.setItem(`${pelinNimi}_pisteet`, pisteet);
  alert(`Pisteet tallennettu: ${pisteet}`);
}
