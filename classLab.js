class Hamster {
    constructor(name) {
        this.owner = ''
        this.name = name
        this.price = 15
    }
    wheelRun() {
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }
}
let hamster1 = new Hamster('robbie')
console.log(hamster1.name)

class Person {
    constructor(name){
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName() {
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
    eat(){
        this.weight++
        this.mood++
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount +=10
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }
}
let ricky = new Person('ricky')
ricky.ageUp()
ricky.ageUp()
ricky.buyHamster(hamster1)
console.log(ricky)

let timmy = new Person('Timmy')
while (timmy.getAge() < 5) {
    timmy.ageUp()
}
console.log(timmy)
for(let i = 0; i < 5 ; i++){
    timmy.eat()
}
for(let i = 0; i < 5 ; i++){
    timmy.exercise()
}
for(let i = 0; i < 9 ; i++){
    timmy.ageUp()
}
let gus = new Hamster('Gus')
gus.owner = "Timmy"
timmy.buyHamster(gus)
for(let i = 0; i < 15 ; i++){
    timmy.ageUp()
}
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()
console.log(timmy)

class Dinner {

}

class Chef {

}