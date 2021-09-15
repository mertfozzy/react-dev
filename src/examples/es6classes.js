// ES5 Class : var person = function () { }


//ES6 Class :
class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    calculateAge(){
        return new Date().getFullYear() - this.age;
    }

    greeting(text){
        return ` ${text}, my name is ${this.name}. `;
    }

}

//Objects :
const p = new person("Mert", 21);
const p2 = new person("Mercan", 20);


console.log(p.calculateAge());
console.log(p2.calculateAge());

console.log(p.greeting("Hello"));
console.log(p);