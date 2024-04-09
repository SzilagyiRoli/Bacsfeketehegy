const nagycim = document.getElementById("nagycim");
const leiras = document.getElementById("leiras");
const kep = document.getElementById("kep");
const meggynap = document.getElementById("meggynapok");


async function getData(){
    const adatok = await fetch("json/esemenyek.json").then(res=>res.json());
    return adatok;
}

async function getDataAndUpdateUI(index) {
    const adatok = await getData();
    nagycim.textContent = adatok[index].nev;
    kep.src = adatok[index].kep;
    leiras.textContent = adatok[index].leiras;
}

meggynap.addEventListener('click', () => getDataAndUpdateUI(0));
document.getElementById('szuret').addEventListener('click', () => getDataAndUpdateUI(1));
document.getElementById('kuntabor').addEventListener('click', () => getDataAndUpdateUI(2));
document.getElementById('szinjatszo').addEventListener('click', () => getDataAndUpdateUI(3));
