import ResourceModule from './modules/ResourcesModule.js';

document.getElementById('mines').onclick = function() {
    const randomValue = Math.random();
    const amount = Math.floor(Math.random() * 10) + 1; // Tilfeldig mengde mellom 1 og 10
    if (randomValue < 0.25) { // 25% sjanse for gull
        ResourceModule.resources[1].amount += amount; // Legg til gull
    } else { // 75% sjanse for metall
        ResourceModule.resources[0].amount += amount; // Legg til metall
    }
    ResourceModule.saveResources(); // Lagre ressurser i localStorage
    ResourceModule.updateUI(); // Oppdater brukergrensesnittet
};

document.getElementById('woods').onclick = function() {
    const amount = Math.floor(Math.random() * 10) + 1; // Tilfeldig mengde mellom 1 og 10
    ResourceModule.resources[2].amount += amount; // Legg til tre
    ResourceModule.saveResources(); // Lagre ressurser i localStorage
    ResourceModule.updateUI(); // Oppdater brukergrensesnittet
};
