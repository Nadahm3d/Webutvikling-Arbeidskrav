
// Laster ressurser fra localStorage når siden lastes inn
const ResourceModule = (() => {
    const resources = [ 
        {
            name: 'Metal',
            amount: 0,
            Image: "metal.png",
        },
        {
            name: 'Gold',
            amount: 0,
            Image: "gold.png",
        },
        {
            name: 'Wood',
            amount: 0,
            Image: "wood.png", 
        }
    ];
    
    const saveResources = () => {
        resources.forEach((resource) => {
            localStorage.setItem(resource.name, JSON.stringify(resource.amount));
        });
    };
    
    const loadResources = () => {
        resources.forEach(resource => {
            const amount = JSON.parse(localStorage.getItem(resource.name));
            if (amount != null) {
                resource.amount = amount; // Ikke behov for å parse igjen
            }
        });

        // Oppdaterer UI med de lastede verdiene
        updateUI();
    };

    const updateUI = () => {
        document.getElementById('metal').textContent = resources[0].amount;
        document.getElementById('gold').textContent = resources[1].amount;
        document.getElementById('wood').textContent = resources[2].amount;
    };

    loadResources();

    return {
        resources, // Eksponere ressursene
        saveResources,
        updateUI
    };

})();

export default ResourceModule;

