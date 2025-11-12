// 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)

// Ques 01
function sayHello() {
    console.log("Hello");
}

// Ques 02
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

// Ques 03
function greetUser(name = "Guest") {
    console.log(`Hii ${name}`);
}

greetUser();
greetUser("Alok");

// Ques 04
function addUnlimited(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);;
}

console.log(addUnlimited(1, 2, 3))

// Ques 04 - Alternative Solution
function addUnlimited2(...numbers) {
    let sum = 0;
    numbers.forEach(num => sum += num)
    return sum;
}

console.log(addUnlimited2(1, 2))

// Ques 04 - Alternative Solution
function addUnlimited3(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(addUnlimited3(1, 2, 3, 4));


// Ques 05
(function () {
    console.log("Run Instantly");
})();

// Ques 06
function outer() {
    let a = 10;
    return function inner() {
        console.log(`Outer function a: ${a}`);
    }
}

outer()();

// Ques 07
let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Kiwi");
fruits.shift();

// Ques 08
for (let i = 0; i < fruits.length; i++) console.log(fruits[i]);

// Ques 09
let person = {
    name: 'Subastral',
    age: 21,
    city: "Delhi"
}

for (let key in person) {
    console.log(key, person[key]);
}

// Ques 10
setTimeout(() => {
    console.log("Time's up!!!")
}, 2000)


//🟢 Level 2 – Functional Thinking & Logic Tasks (Intermediate)

// Ques 01
const runTwice = fnc => {
    fnc();
    fnc();
};

runTwice(function () {
    console.log("Running function")
})

// Ques 02
let a = 10;
function pureFnc(val) {
    return val * 10;
}

console.log(pureFnc(5));

function impureFnc() {
    console.log(a++);
}

impureFnc();

// Ques 03
function printObj({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

printObj(person);
printObj({ name: "Dev", age: 21, city: "Delhi" });

// Ques 04

let userOne = {
  name: 'Subastral',
  
  normalFn: function() {
    console.log("Normal Function → this:", this);
  },
  
  arrowFn: () => {
    console.log("Arrow Function → this:", this);
  }
};

userOne.normalFn(); // this → user object
userOne.arrowFn();  // this → outer scope (not user)


// Ques 05
let arr = [1, 2, 3, 4, 5];

let sqarr = arr.map(num => num * num);

console.log(arr);
console.log(sqarr)

// Ques 06
let evenarr = arr.filter(num => num % 2 === 0);

console.log(evenarr);

// Ques 07
let salary = [1000, 2000, 3000];
let totalSalary = salary.reduce((acc, sal) => acc + sal, 0);
console.log(`Total Salary is: ${totalSalary}`)

// Ques 08
let names = ['Alok', 'Subastral', 'Dev'];

let isAnyThreeChar = names.some((name) => name.length > 3);
console.log(isAnyThreeChar);

let stricltyGreaterThanThreeChar = names.every((name) => name.length > 3);
console.log(stricltyGreaterThanThreeChar);

// Ques 9
let user = {
    name: 'Subastral',
    address: {
        city: {
            name: 'Delhi',
            pincode: 110086
        }
    }
}

console.log(user?.address?.city?.name)

// Ques 10
// “Freeze” = pura object rock solid, kuch change/add/delete nahi. Object read-only ho jaata hai.
Object.freeze(user);
user.name = 'Dev'; // This modification will be ignored due to Object.freeze
user.newKey = 'newValue'; // This addition will be ignored due to Object.freeze
delete user.address; // This deletion will be ignored due to Object.freeze
delete user.address.city; // This deletion will be done because address is not frozen
user.address.newCity = { name: 'Mumbai', pincode: 1209120 }; // This addition will be done 
console.log(user)
console.log(`Trying to modify user.name: ${user.name}`);

// “Seal” = object ke structure ko lock kar deta hai — koi new key add/delete nahi kar sakte. Par existing keys ko modify kar sakte hain.
Object.seal(user);
user.name = 'Dev'; // This modification will be successful
user.newKey = 'newValue'; // This addition will be ignored due to Object.seal
delete user.address; // This deletion will be ignored due to Object.seal
console.log(user);
console.log(`After sealing, modified user.name: ${user.name}`);