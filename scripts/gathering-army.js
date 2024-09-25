import WarriorModule from "./modules/WarriorsModule.js";
import weaponModule from "./modules/WeaponsModule.js";
import animalModule from "./modules/AnimalsModule.js";
import ResourceModule from "./modules/ResourcesModule.js";


// Function for å generere HTML for krigere
const warriorContainer = document.querySelector(".warrior-container");
const generateWarriors = () => {
    const warriors = WarriorModule.getAll();
    let output = "";

    warriors.forEach(warrior => {
        output += `
            <div class="warrior-item col-xs-6 col-sm-4 col-md-3">
                <img src="${warrior.image}" alt="${warrior.name}">
                <h3 class="category-name">${warrior.name}</h3>
                <p class="price">$${warrior.price}</p>
                <button class="buy-btn">Buy Warrior</button>
            </div>
        `;
    });

    warriorContainer.innerHTML = output;
};



// Function for å generere HTML for våpen
const weaponContainer = document.querySelector(".weapon-container"); // Forutsetter at du har en container for våpen
const generateWeapons = () => {
    const weapons = weaponModule.getAll();
    let output = "";

    weapons.forEach(weapon => {
        output += `
            <div class="weapon-item col-xs-6 col-sm-4 col-md-3">
                <img src="${weapon.image}" alt="${weapon.name}">
                <h3 class="weapon-name">${weapon.name}</h3>
                <p class="price">$${weapon.price}</p>
                <button class="buy-btn">Buy Weapon</button>
            </div>
        `;
    });

    weaponContainer.innerHTML = output;
};


// Function for å generere HTML for dyr
const animalContainer = document.querySelector(".animal-container");
const generateAnimals = () => {
    const animals = animalModule.getAll();
    let output = "";

    animals.forEach(animal => { 
        output += `
            <div class="animal-item col-xs-6 col-sm-4 col-md-3">
                <img src="${animal.image}" alt="${animal.name}">
                <h3 class="animal-name">${animal.name}</h3>
                <p class="price">$${animal.price}</p>
                <button class="buy-btn">Buy Animal</button>
            </div>
        `;
    });

    animalContainer.innerHTML = output;
};


//TODO: MÅ LAGE SÅNN AT RECOURSES ENDRES JO MER VI EARNER

(()=>{
    generateWarriors();    
    generateWeapons();
    generateAnimals();
})()























/*



// KJØPE WARRIORS

// Hent antall mynter fra localStorage
const getCoins = () => {
    return parseInt(localStorage.getItem('coins')) || 0;
};

// Oppdater antall mynter i localStorage
const updateCoins = (amount) => {
    const currentCoins = getCoins();
    localStorage.setItem('coins', currentCoins + amount);
};

// Funksjoner for å kjøpe krigere, våpen og dyr
const buyWarrior = (warriorName, cost) => {
    const currentCoins = getCoins();
    if (currentCoins >= cost) {
        updateCoins(-cost);
        let warriors = JSON.parse(localStorage.getItem('warriors')) || [];
        warriors.push(warriorName);
        localStorage.setItem('warriors', JSON.stringify(warriors));
        console.log(`Kjøpt kriger: ${warriorName}`);
        updateUI(); // Oppdater UI etter kjøp
    } else {
        console.log('Ikke nok mynter til å kjøpe kriger.');
    }
};

const buyWeapon = (weaponName, cost) => {
    const currentCoins = getCoins();
    if (currentCoins >= cost) {
        updateCoins(-cost);
        let weapons = JSON.parse(localStorage.getItem('weapons')) || [];
        weapons.push(weaponName);
        localStorage.setItem('weapons', JSON.stringify(weapons));
        console.log(`Kjøpt våpen: ${weaponName}`);
        updateUI(); // Oppdater UI etter kjøp
    } else {
        console.log('Ikke nok mynter til å kjøpe våpen.');
    }
};

const buyAnimal = (animalName, cost) => {
    const currentCoins = getCoins();
    if (currentCoins >= cost) {
        updateCoins(-cost);
        let animals = JSON.parse(localStorage.getItem('animals')) || [];
        animals.push(animalName);
        localStorage.setItem('animals', JSON.stringify(animals));
        console.log(`Kjøpt dyr: ${animalName}`);
        updateUI(); // Oppdater UI etter kjøp
    } else {
        console.log('Ikke nok mynter til å kjøpe dyr.');
    }
};

// Funksjon for å oppdatere UI
const updateUI = () => {
    document.getElementById('coin-count').textContent = getCoins();
    // Her kan du legge til logikk for å oppdatere antall krigere, våpen og dyr i UI
};

// Kall updateUI når siden lastes inn
window.onload = () => {
    updateUI();
};

*/



