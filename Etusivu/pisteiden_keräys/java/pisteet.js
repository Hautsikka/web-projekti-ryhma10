// Haetaan pelin nimi HTML:n body-elementistä
const pelinNimi = document.body.dataset.pelinNimi;

// Simuloidaan pisteiden laskua (korvaa omalla logiikalla)
function laskePisteet() {
  // Tässä olisi sun oma logiikka, esim. laskurit, vastaukset jne.
  // Esimerkki: satunnainen testipiste
  return Math.floor(Math.random() * 10) + 1;
}

// Pisteiden tallennus
function tallennaPisteet() {
  const pisteet = laskePisteet();
  localStorage.setItem(`${pelinNimi}_pisteet`, pisteet);
  alert(`Pisteet tallennettu: ${pisteet}`);
}

// Kutsu tätä pelin lopussa, esim. kun käyttäjä klikkaa "Lopeta peli"
tallennaPisteet();
