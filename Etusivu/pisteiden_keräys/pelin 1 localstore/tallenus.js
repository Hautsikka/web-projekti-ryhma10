let pisteet = 0;

// Pelaaja vastaa oikein
function pelaajaVastasiOikein() {
    pisteet += 1;
}

// Peli päättyy
function peliLoppui() {
    localStorage.setItem("peli1_aleksi_pisteet", pisteet);
    console.log("Pisteet tallennettu: " + pisteet);
}
