const weaponModule = (() => {
    const weapons = [
        { name: 'Catapult', image: "/images/catapult.png", price: 300 },
        { name: 'Cannon', image: "/images/cannon.png", price: 350 },
       
    ];

    const getAll = () => {
        return structuredClone(weapons);
    };

    return {
        getAll
    };
})();

export default weaponModule;
