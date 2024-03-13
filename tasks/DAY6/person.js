
class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    getDetails() {
        return `Name: ${this.getFullName()}, Age: ${this.age}, Gender: ${this.gender}`;
    }
}

// Create a new instance of Person
const person1 = new Person("John", "Doe", 30, "Male");

// Accessing details
console.log(person1.getDetails());
