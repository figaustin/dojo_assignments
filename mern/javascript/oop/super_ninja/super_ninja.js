class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log(this.name)
        return this
    }

    showStats() { 
        console.log(`Name = ${this.name}, Strength = ${this.strength}, Speed = ${this.speed} and Health = ${this.health}`)
        return this
    }

    drinkSake() {
        this.health += 10
        return this
    }

}

let ninja1 = new Ninja("Donald", 100)

class Sensei extends Ninja {
    constructor(name){
        super(name)

        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10

    }

    speakWisdom() {
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        return this
    }
    
}

const sens = new Sensei("Master Splinter");

sens.showStats().speakWisdom().showStats()