function Person(name, age) {
    this.name = name;
    this.age = age;
}
var jimin = new Person('지민', 23);

// ES2015 ES6
class Person {
    constructor(name, age) {
        this.name;
        this.age;
    }
}

let jimin = new Person('지민', 23);
console.log(jimin);