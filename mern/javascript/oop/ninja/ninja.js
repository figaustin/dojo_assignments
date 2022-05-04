class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
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

ninja1.sayName().showStats().drinkSake().showStats()