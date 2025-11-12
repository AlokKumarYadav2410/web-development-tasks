// Basic Operators (Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise)

let a = 10;
let b = 3;

console.log(`Addition: ${a} + ${b} = ${a + b}`);
console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
console.log(`Division: ${a} / ${b} = ${a / b}`);
console.log(`Modulus: ${a} % ${b} = ${a % b}`);
console.log(`Exponentiation: ${a} ** ${b} = ${a ** b}`);

//-----------------------------------------

let x = 5;
x += 3;
x -= 2;
x *= 4;
x /= 2;
x %= 3;
x **= 2;

//-----------------------------------------

let count = 5;
console.log(`Count before increment: ${count}`);
// count++; 
console.log(`Count: ${count++}`); //Jab hum yeh likhte hain to pehle current value print hoti hai fir uske baad increment hota hai
console.log(`Count after increment: ${count}`);
count--;
console.log(`Count after decrement: ${count}`);
console.log(`Count after decrement: ${--count}`); //Jab hum yeh likhte hain to pehle decrement hota hai fir uske baad current value print hoti hai
console.log(`Count: ${count--}`);

//-----------------------------------------

console.log(`5 == '5': ${5 == '5'}`); // Here type is not considered and that's why we are getting true - Non Strict Equality
console.log(`5 === '5': ${5 === '5'}`); // Here type is also considered and that's why we are getting false - Strict Equality

//-----------------------------------------
let p = 10;

if (p > 5 && p < 20 && p === 10) {
    console.log("p is exactly 10");
}
else{
    console.log("p is not 10");
}

//-----------------------------------------

console.log(true && false);
console.log(true || false);
console.log(!true);

//-----------------------------------------
// 101 = 5, 001 = 1
console.log(5 & 1); // AND Operation 1
console.log(5 | 1); // OR Operation 5

// -----------------------------------------

/* Variable Hoisting in JavaScript*/
console.log(c);
var c = 10;

// console.log(d); //  Uncommenting this line will throw ReferenceError: Cannot access 'd' before initialization
// let d = 20;

test()
function test() {
    console.log("Function Hoisting Works!");
}

// hello();
// var hello = function() { console.log("Hi") }

// -----------------------------------------
/**
 * Ques 1: What gets hoisted in JavaScript?
 * 1. Variable Declarations (using var) - Only the declaration is hoisted, not the initialization.
 * 2. let and const (Hoisted, but not initialized) - They are hoisted to the top of their block scope but are not initialized. Accessing them before declaration results in a ReferenceError due to the temporal dead zone.
 * 3. Function Declarations - Entire function declarations are hoisted, allowing them to be called before they appear in the code.
 * 4. Function Expressions and Arrow Functions (using var) - The variable declaration is hoisted, but the assignment is not. Accessing them before assignment results in undefined.
 * 
 * Ques 2: What does not get hoisted fully in JavaScript?
 * 1. Variable Initializations - Only the declaration is hoisted, not the initialization.
 * 2. let and const - They are hoisted but not initialized, leading to a temporal dead zone.
 * 3. Function Expressions and Arrow Functions - The variable declaration is hoisted, but the assignment is not.
 */

let age = +prompt("Enter your age: ");
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

let marks = 90;
if(marks >= 90){
    console.log("Grade A");
} else if(marks >= 75){
    console.log("Grade B");
} else if(marks >= 50){
    console.log("Grade C");
} else {
    console.log("Fail");
}

let city = "Bhopal";
if(city === "Bhopal"){
    console.log("MP");
} else if(city === "Delhi"){
    console.log("Capital of India");
} else{
    console.log("Unknown City");
}

let score = 40;
score > 35 ? console.log("Pass") : console.log("Fail");

let temperature = 30;
temperature > 30 ? console.log("Hot") : console.log("Pleasant");

let dayNum = 3;
switch(dayNum){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid Day Number");
}

let country = "India";
if (age > 18 && country === "India") {
    console.log("Eligible for vote");
}
else{
    console.log("Not eligible for vote");
}