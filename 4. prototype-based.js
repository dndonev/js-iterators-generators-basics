const log = console.log;

class Animal {
    it = 0;
    constructor(age, energy) {
        this.age = age;
        this.energy = energy;
    }
}

Animal.prototype[Symbol.iterator] = function () {
    return {
        next: () => {
            if (this.it < Object.keys(this).length) {
                return {
                    value: this[Object.keys(this)[this.it++]],
                    done: false
                }
            }
            return {
                value: undefined,
                done: true
            }
        }
    }
}

class Dog extends Animal {
    constructor(name, age, energy) {
        super(age, energy)
        this.name = name;
    }
}

const dog1 = new Dog('Barry', 4, 99);
log(dog1)

for (const iterator of dog1) {
    log(iterator)
}