class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Calls the constructor of the parent class
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name}, the ${this.breed}, barks.`);
    }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak();  // Output: Buddy, the Golden Retriever, barks.