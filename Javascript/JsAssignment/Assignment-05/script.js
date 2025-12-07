// -------------- | SECTION 1: Objects and OOPS Thinking (Foundation) | -----------------

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

// ---------------- | SECTION 2: Classes and Objects | --------------------------------
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

// --------------- | SECTION 3: Constructor and this keyword | -----------------------
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

// --------------- | SECTION 4: Constructor Functions and Prototypes | -----------------------
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
userObj1.logout();
let userObj2 = new Users("Subastral", "sub@a.com");
userObj2.logout();

console.log(userObj1.logout === userObj2.logout);


// --------------- | SECTION 5: call, apply, bind | -----------------------
function abcd(){
    console.log(this.name); // this refers to global object (window in browsers) and name is "" so we see space in this console.
}

function xyz(...val){
    console.log(this.name);
    console.log(val);
}

let myObj = {
    name: "My Object Name"
 }

abcd(); // this refers to global object (window in browsers)

// When we call the function using call or apply method, we can explicitly set the value of this.
abcd.call(myObj); // this refers to myObj
abcd.apply(myObj); // this refers to myObj

// The bind() method creates a new function that, when called, has its this keyword set to the provided value.
let boundFunc = xyz.bind(myObj, 1,2,3,4);
boundFunc(); // this refers to myObj


// Borrow a method from one object and run it for another object using call.

let obj = {
    name: "Object One",
    greet: function(){
        console.log(`Hello from ${this.name}`);
    }
}

let obj2 = {
    name: "Object Two"
}

obj.greet.call(obj2); // Borrowing greet method from obj and using it for obj2