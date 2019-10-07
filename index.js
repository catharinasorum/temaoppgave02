const sectionHandleliste = document.querySelector("#sectionHandleliste");
const skjemaHandleliste = document.querySelector("#skjemaHandleliste");
const inpVare = document.querySelector("#inpVare");

const varer = ["Melk", "Ost", "Egg", "Smør", "Jordbær", "Laks"];

function visHandleliste() {
    sectionHandleliste.innerHTML = "";
    for(const [indeks, vare] of varer.entries()) {        
        sectionHandleliste.innerHTML += `
            <div>${vare}</div>
            <div onClick="slett(${indeks})" class="btn">X</div>
        `;
    }
}


function leggeTilVare(evt) {
    evt.preventDefault();
    varer.unshift(inpVare.value);
    visHandleliste();
    skjemaHandleliste.reset();
}

skjemaHandleliste.addEventListener("submit", leggeTilVare);

function slett(indeks) {
    varer.splice(indeks, 1);
    visHandleliste();
}

visHandleliste();