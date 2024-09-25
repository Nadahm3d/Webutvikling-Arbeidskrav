const animalModule = (() => {
    const animals = [
        { name: 'Horse', image: "/images/horse.png", price: 150 },
        { name: 'Elephant', image: "/images/elephant.png", price: 500 },
        
    ];

    const getAll = () => {
        return structuredClone(animals);
    };

    return {
        getAll
    };
})();

export default animalModule;
