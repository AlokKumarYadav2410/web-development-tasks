// Ques 1
console.log("Printing numbers from 1 to 10")
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Ques 2
console.log("Printing only even numbers from 1 to 20")
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// Ques 3
console.log("Printing numbers from 10 to 1")
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Ques 4
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

// Ques 5
console.log("Printing whether the number is even or odd from 1 to 10");
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) console.log(`${i} is a even number`)
    else console.log(`${i} is a odd number`);
}

// Ques 6
console.log("Taking input from user");
let num = prompt("Enter any number");
if (num === "" || num === null) {
    if (num === "") {
        console.log("Please enter number don't leave empty space");
    }
    else if (num === null) {
        console.log("You have pressed cancel");
    }
}
else {
    num = +num;
    if (num > 0) {
        console.log(`${num} is a positive number`);
    }
    else if (num < 0) {
        console.log(`${num} is a negative number`);
    }
    else if (num === 0) {
        console.log(`${num}`);
    }
    else {
        console.log("Please enter number only")
    }
}

// Ques 7
console.log("Taking age as an input");
let age = prompt("Enter your age");
if (age === "" || age === null) {
    if (age === "") console.error("Please enter your age don't leave empty space");
    else if (age === null) console.error("You have pressed cancel");
}
else {
    age = +age;
    if (isNaN(age)) console.error("Please enter number only");
    else console.log(age >= 0 ? (age >= 18 ? 'Eligible for vote' : 'Not eligible for vote') : "Enter positive number");
}

// Ques 8
console.log("Printing Table of 5");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Ques 9
console.log("Counting how many numbers are greater than 8 between 1 to 15");
let count = 0;
for (let i = 1; i <= 15; i++) {
    if (i > 8) {
        count++;
    }
}
console.log(`There are ${count} number greater than 8`);

// Ques 10
console.log("Checking password status");
let password = '123';
for (let i = 1; i <= 3; i++) {
    let userInput = prompt("Enter your password");
    if (userInput === null) {
        console.log("You have pressed cancel");
        break;
    }
    else {
        if (userInput === password) {
            console.log("Login Successful");
            break;
        }
        else {
            alert(`Incorrect Password, you have ${3 - i} attempts left`);
            if (i === 3) alert("Account locked due to 3 unsuccessful attempts");
        }
    }
}
