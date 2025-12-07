// ------------- | SECTION 1: OOPS Thinking with Objects | -------------
const laptop = {
    brand: "Dell",
    price: 60000,
    start: function () {
        console.log(`${this.brand} laptop started`);
    },
    increasePriceByTenPercent: function () {
        const increasedPrice = this.price * 0.10;
        this.price += increasedPrice;
    }
}

laptop.start();
console.log(`Original Price: ${laptop.price}`);
laptop.increasePriceByTenPercent();
console.log(`Increased Price: ${laptop.price}`);

/*
    If we will use the same object structure for multiple laptops,
    it will lead to code duplication. To avoid that, we can use Classes.
*/

// ------------- | SECTION 2: Classes and Objects | ----------------

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        this.showDetails = function () {
            console.log(`Name: ${this.name}, Salary: ${this.salary}`);
        }
    }
}

const emp1 = new Employee("Subastral", 50000);
emp1.name = "Subastral Dev";
emp1.showDetails();
const emp2 = new Employee("Alok", 60000);
emp2.showDetails();
const emp3 = new Employee("Dev", 55000);
emp3.showDetails();

/**
 * Class is better than Object literals when we have multiple similar objects to create.
 * It helps to avoid code duplication and makes the code more organized and maintainable.
 */

// ------------- | SECTION 3: Constructor and Initialization | ----------------

class BankAccount {
    constructor(accountHolderName, balance) {
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
    }
}

const acc1 = new BankAccount("Subastral", 10000);
const acc2 = new BankAccount("Alok", 20000);
acc1.deposit(5000);

/**
 * Second account acc2 is independent of acc1. Each instance has its own set of properties and methods.
 * This is the key feature of OOP - Encapsulation.
 * That's why second account is not affected by operations on the first account.
 */

// ------------- | SECTION 4: Understanding this (Very Important) | ----------------
let profile = {
    username: "Subastral",
    printName() {
        console.log(this.username);
    }
}

profile.printName(); // "Subastral"

let fn = profile.printName;
fn(); // undefined (in strict mode) or global object (in non-strict mode)

let boundFn = profile.printName.bind(profile);
boundFn(); // "Subastral"

// ------------- | SECTION 5: Constructor Function and Prototypes | ----------------

function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;

    // this.describe = function () {
    //     console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
    // };
}

Vehicle.prototype.describe = function () {
    console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
};

const car3 = new Vehicle("Truck", 6);
const car4 = new Vehicle("Scooter", 2);

car3.describe();
car4.describe();

console.log(car3.describe === car4.describe); 

/**
 * When we define methods inside the constructor, each instance gets its own copy of the method.
 * This leads to higher memory consumption if we have many instances.
 * By defining methods on the prototype, all instances share the same method, saving memory.
 */

// ------------- | SECTION 6: call Method Practice| ----------------
function showBrand(){
    console.log(`Brand: ${this.brand}`);
}

const obje1 = { brand: "Apple" };
const obje2 = { brand: "Samsung" };

showBrand.call(obje1); // Brand: Apple
showBrand.call(obje2); // Brand: Samsung

/**
 * Here call is solving the problem of context (this) by explicitly setting it to the desired object.
 * Also, it allows us to reuse the same function with different objects without duplicating code.
 */

// ------------- | SECTION 7: apply Method Practice| ----------------
function introduce(city, role) {
    console.log(`${this.name} - ${city} - ${role}`);
}

const person1 = { name: "Subastral" };
introduce.apply(person1, ["New York", "Developer"]); // Subastral - New York - Developer

/**
 * Similar to call, apply sets the context (this) for the function.
 * The difference is that apply takes arguments as an array, making it useful when arguments are dynamic or already in an array.
 */

// ------------- | SECTION 8: bind Method Practice| ----------------
function greet() {
    console.log(`Hello, ${this.name}`);
}

const member = { name: "Subastral" };

const greetUser = greet.bind(member);
greetUser(); // Hello, Subastral

/**
 * bind creates a new function with the specified context (this) permanently set.
 * This is useful when we want to pass a function as a callback but want to ensure it retains its original context.
 */
