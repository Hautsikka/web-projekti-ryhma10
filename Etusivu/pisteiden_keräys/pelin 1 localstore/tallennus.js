// Haetaan pelin nimi <body data-pelin-nimi="..."> attribuutista
const pelinNimi = document.body.dataset.pelinNimi;

// Tarkistetaan että pelin nimi löytyy
if (!pelinNimi) {
  console.warn("Pelin nimeä ei löytynyt body-elementin data-pelin-nimi-attribuutista!");
}

// Tämä funktio tallentaa annetut pisteet localStorageen oikealla avaimella
function tallennaPisteet(oikeatPisteet) {
  if (!pelinNimi) {
    console.error("Pelin nimeä ei voida käyttää tallennuksessa.");
    return;S
  }

  localStorage.setItem(`${pelinNimi}_pisteet`, oikeatPisteet);
  console.log(`✅ Pisteet tallennettu: ${pelinNimi}_pisteet = ${oikeatPisteet}`);
}
