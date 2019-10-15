const sectionHandleliste = document.querySelector("#sectionHandleliste");
const skjemaHandleliste = document.querySelector("#skjemaHandleliste");
const inpVare = document.querySelector("#inpVare");
const valgKategori = document.querySelector("#valgKategori");

// Et tomt array, som man fyller inn i inputfeltet
const varer = [
    /*{navn: "Melk", kategori: "meieri", plukket: false},
    {navn: "Fløte", kategori: "meieri", plukket: false},
    {navn: "Eple", kategori: "frukt", plukket: false}*/
];

// Funksjon som viser selve handlelisten
function visHandleliste() {

    const meierivarer = varer.filter( vare => vare.kategori === "meieri" );
    const fruktvarer = varer.filter( vare => vare.kategori === "frukt" );
    const frysevarer = varer.filter( vare => vare.kategori === "frys" );
    const ferskvarer = varer.filter( vare => vare.kategori === "fersk" );
    const kryddervarer = varer.filter( vare => vare.kategori === "krydder" );
    const ferdigmatvarer = varer.filter( vare => vare.kategori === "ferdigmat" );
    const husholdningsvarer = varer.filter( vare => vare.kategori === "husholdning" );
    const godisvarer = varer.filter( vare => vare.kategori === "godis" );
    const drikkevarer = varer.filter( vare => vare.kategori === "drikke" );
    const annetvarer = varer.filter( vare => vare.kategori === "annet" );


    sectionHandleliste.innerHTML = ""; 


    if(meierivarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Meieri</h2>";
        for(const [indeks, vare] of meierivarer.entries()) {        
            sectionHandleliste.innerHTML += `
                <div id="${vare.navn}" onclick="byttKlasse('${vare.navn}')">${vare.navn}</div>
                <div onClick="slett('${vare.navn}')" class="btn">X</div>
            `;
        }
    }

    if(fruktvarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Frukt & Grønt</h2>";
        for(const [indeks, vare] of fruktvarer.entries()) {        
            sectionHandleliste.innerHTML += `
            <div id="${vare.navn}" onclick="byttKlasse('${vare.navn}')">${vare.navn}</div>
            <div onClick="slett('${vare.navn}')" class="btn">X</div>
            `;
        }  
    }

    if(frysevarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Frysevarer</h2>";
        for(const [indeks, vare] of frysevarer.entries()) {        
            sectionHandleliste.innerHTML += `
            <div id="${vare.navn}" onclick="byttKlasse('${vare.navn}')">${vare.navn}</div>
            <div onClick="slett('${vare.navn}')" class="btn">X</div>
            `;
        }  
    }

    if(ferskvarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Ferskvarer</h2>";
        for(const [indeks, vare] of ferskvarer.entries()) {        
            sectionHandleliste.innerHTML += `
            <div id="${vare.navn}" onclick="byttKlasse('${vare.navn}')">${vare.navn}</div>
            <div onClick="slett('${vare.navn}')" class="btn">X</div>
            `;
        }  
    }

    if(kryddervarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Krydder og urter</h2>";
        for(const [indeks, vare] of kryddervarer.entries()) {        
            sectionHandleliste.innerHTML += `
            <div id="${vare.navn}" onclick="byttKlasse('${vare.navn}')">${vare.navn}</div>
            <div onClick="slett('${vare.navn}')" class="btn">X</div>
            `;
        }  
    }

    if(ferdigmatvarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Ferdigmat</h2>";
        for(const [indeks, vare] of ferdigmatvarer.entries()) {        
            sectionHandleliste.innerHTML += `
            <div id="${vare.navn}" onclick="byttKlasse('${vare.navn}')">${vare.navn}</div>
            <div onClick="slett('${vare.navn}')" class="btn">X</div>
            `;
        }  
    }

    if(husholdningsvarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Husholdning</h2>";
        for(const [indeks, vare] of husholdningsvarer.entries()) {        
            sectionHandleliste.innerHTML += `
            <div id="${vare.navn}" onclick="byttKlasse('${vare.navn}')">${vare.navn}</div>
            <div onClick="slett('${vare.navn}')" class="btn">X</div>
            `;
        }  
    }

    if(godisvarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Godteri og potetgull</h2>";
        for(const [indeks, vare] of godisvarer.entries()) {        
            sectionHandleliste.innerHTML += `
            <div id="${vare.navn}" onclick="byttKlasse('${vare.navn}')">${vare.navn}</div>
            <div onClick="slett('${vare.navn}')" class="btn">X</div>
            `;
        }  
    }

    if(drikkevarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Drikke</h2>";
        for(const [indeks, vare] of drikkevarer.entries()) {        
            sectionHandleliste.innerHTML += `
            <div id="${vare.navn}" onclick="byttKlasse('${vare.navn}')">${vare.navn}</div>
            <div onClick="slett('${vare.navn}')" class="btn">X</div>
            `;
        }  
    }

    if(annetvarer.length > 0) {
        sectionHandleliste.innerHTML += "<h2>Annet</h2>";
        for(const [indeks, vare] of annetvarer.entries()) {        
            sectionHandleliste.innerHTML += `
            <div id="${vare.navn}" onclick="byttKlasse('${vare.navn}')">${vare.navn}</div>
            <div onClick="slett('${vare.navn}')" class="btn">X</div>
            `;
        }  
    }

}

// Legger til varer via submit knapp
function leggeTilVare(evt) {
    evt.preventDefault();
    varer.unshift(
       {
            navn: inpVare.value,
            kategori: velgKategori.value
       } 
    );
    visHandleliste();
    skjemaHandleliste.reset();
}

skjemaHandleliste.addEventListener("submit", leggeTilVare);

// Fjerner varer
function slett(navn) {
    const indeks = varer.findIndex(vare => vare.navn === navn);
    varer.splice(indeks, 1);
    visHandleliste();
}

// Bytter klasse til .checked
function byttKlasse(id) {
    const element = document.getElementById(id);
    element.classList.toggle("checked");
}

// Kjører funksjonen slik at handlelisten synes
visHandleliste();