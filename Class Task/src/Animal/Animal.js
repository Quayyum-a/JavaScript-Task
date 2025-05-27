class Animal {
  #name
  #age
    constructor(name, age) {
        this.#name = name;  
        this.#age = age;    
    }
    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    
    speak() {
        console.log(`${this.#name} makes a sound.`);
    }
}

module.exports = Animal;