// -------------- | Objects and OOPS Thinking (Foundation) | -----------------

const user = {
    name: "Alok",
    email: "a@a.com",
    loggedIn: function(){
        console.log(`${this.name} logged in`);
    }
}

user.loggedIn();

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    loggedIn(){
        console.log(`${this.name} logged in`);
    }
}

const user1 = new User("Alok", "a@a.com");
user1.loggedIn();

const product = {
    name: "Laptop",
    price: 45000,
    discount: function(discountPercent){
        const discountAmount = (this.price * discountPercent) / 100;
        const finalPrice = this.price - discountAmount;
        return finalPrice;
    }
}

console.log(`Final Price: ${product.discount(10)}`);

// ---------------- | Classes and Objects | --------------------------------
class Car{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }

    drive(){
        console.log(`Brand is ${this.brand} and speed is ${this.speed}`);
    }
}

const car1 = new Car("Thar", 150);
car1.drive();
const car2 = new Car("BMW", 200);
car2.drive();

// --------------- | Constructor and this keyword | -----------------------
class Student{
    constructor(name, rollNumber){
        this.name = name;
        this.rollNumber = rollNumber;
    }

    introduce(){
        console.log(`Name is ${this.name} and roll number is ${this.rollNumber}`)
    }
}

const stud1 = new Student("Alok", 15);
stud1.introduce();

const newObj = {
    normalFunc: function(){
        console.log(this);
    },
    arrowFunc: () => {
        console.log(this);
    }
}

newObj.normalFunc(); // refers to newObj
newObj.arrowFunc(); // refers to global object (window in browsers)

function Users(name, email){
    this.name = name;
    this.email = email;
    this.login = function(){
        console.log(`${this.name} logged in`);
    }
}

Users.prototype.logout = function(){
    console.log(`${this.name} logged out`);
}

let userObj1 = new Users("Subastral", "sub@a.com");
userObj1.login();
let userObj2 = new Users("Subastral", "sub@a.com");
userObj2.login();

console.log(userObj1 === userObj2);