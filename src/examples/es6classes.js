// ES5 Class : var Person = function () { }


//ES6 Class :
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    calculateAge(){
        return new Date().getFullYear() - this.age;
    }

    greeting(text){
        this.text = text;
        return `${text}, my name is ${this.name}. `;
    }

}

//burada Student classı Persondan özellik aldı
class Student extends Person{ 
    constructor(name, age, studentID){
        super(name, age); //name ve age Persondan geldiği için tekrar this kullanmak gerekmiyor
        this.studentID = studentID; //studentID yeni bir parametre olduğu için belirtiliyor
    }
}

class Teacher extends Person{
    constructor(name, age, department){
        super(name, age, department);
        this.department = department;
    }
    loginTeacher() {
        return `Welcome ${this.name}, your department is : ${this.department}.`;
    }
}


//Objects :
const p = new Student("Mert", 21, 1804010005);
const p2 = new Person("Mercan", 20);
const p3 = new Teacher("Serra", 21, "Computer Science");


console.log(p.calculateAge());
console.log(p2.calculateAge());
console.log(p.greeting("Hello"));
console.log(p2.greeting("Merhaba"));
console.log(p3.loginTeacher());