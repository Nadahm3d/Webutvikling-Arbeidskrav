const WarriorModule = (() => {
    // Array of warriors
    const warriors = [
        { name: 'Warrior 1', image: "/images/warrior-1.jpg", price: 90 },
        { name: 'Warrior 2', image: "/images/warrior-2.jpg", price: 150 },
        { name: 'Warrior 3', image: "/images/warrior-3.jpg", price: 130 },
        { name: 'Warrior 4', image: "/images/warrior-4.jpg", price: 65 },
        { name: 'Warrior 5', image: "/images/warrior-5.jpg", price: 45 },
        { name: 'Warrior 6', image: "/images/warrior-6.jpg", price: 200 },
    ];

    const getAll = () => {
        return structuredClone(warriors); 
    }

    return {
        getAll
    }
})();

export default WarriorModule;
















    
     













    