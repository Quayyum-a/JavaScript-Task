const Animal = require('./Animal');
class Dog extends Animal {
    #breed
    #color
    constructor(name, age, breed, color) {
        super(name, age);
        this.#breed = breed;
        this.#color = color;
    }
    get breed() {
        return this.#breed;
    }
    get color() {
        return this.#color;
    }
    
    bark() {
        console.log(`${this.name} barks.`);
    }
}
