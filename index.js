const sectionHandleliste = document.querySelector("#sectionHandleliste");
const skjemaHandleliste = document.querySelector("#skjemaHandleliste");
const inpVare = document.querySelector("#inpVare");
const valgKategori = document.querySelector("#valgKategori");

const varer = [
    {navn: "Melk", kategori: "meieri"},
    {navn: "Rømme", kategori: "frukt"},
    {navn: "Fløte", kategori: "meieri"}
];

function visHandleliste() {

    const meierivarer = varer.filter( vare => vare.kategori === "meieri" );
    const fruktvarer = varer.filter( vare => vare.kategori === "frukt" );


    sectionHandleliste.innerHTML = "";

    if(meierivarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Meieri</h2>";
        for(const [indeks, vare] of meierivarer.entries()) {        
            sectionHandleliste.innerHTML += `
                <div>${vare.navn}</div>
                <div onClick="slett(${indeks})" class="btn">X</div>
            `;
    }
    }

    if(fruktvarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Frukt & Grønt</h2>";
        for(const [indeks, vare] of fruktvarer.entries()) {        
            sectionHandleliste.innerHTML += `
                <div>${vare.navn}</div>
                <div onClick="slett(${indeks})" class="btn">X</div>
            `;
    }  
    }

}


function leggeTilVare(evt) {
    evt.preventDefault();
    varer.unshift(
       {
            navn: inpVare.value,
            kategori: valgKategori.value
       } 
    );
    visHandleliste();
    skjemaHandleliste.reset();
}

skjemaHandleliste.addEventListener("submit", leggeTilVare);

function slett(indeks) {
    varer.splice(indeks, 1);
    visHandleliste();
}

visHandleliste();