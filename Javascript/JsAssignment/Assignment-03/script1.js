// Ques 11
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

// Ques 12
let word = prompt("Enter any word and type stop to stop.");
let count = 0;

while(word.toLowerCase() !== 'stop'){
    if(word.toLowerCase() === 'yes') count++;
    word = prompt("Enter any word and type stop to stop.");
}
if(count > 0) console.log(`Yes appeared ${count} times`);

// Ques 13
for (let i = 1; i < 51; i++) {
    if (i % 7 === 0) console.log(i);
}

// Ques 14
let sum = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 1) {
        sum += i;
    }
}
console.log(`Sum of odd numbers from 1 to 30 is ${sum}`)

// Ques 15
let number = +prompt("Enter number and if you type even number we will stop...");
while(number%2 !== 0){
    number = +prompt("Enter number and if you type even number we will stop...");
}

// Ques 16
let start = +prompt("Enter starting number");
let end = +prompt("Enter end number");
if(start > end){
    console.error("Start can't be greater than end")
}
else{
    for(let i = start; i < end; i++){
        console.log(i);
    }
}

// Ques 17
let counter = 0;
for (let i = 1; i < 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        counter++;
        if (counter === 3) {
            break;
        }
    }
}

// Ques 18
let numberOfPositive = 0;
let num = +prompt("Enter number");
if(num > 0) numberOfPositive++;
let i = 1;
while(i !== 5){
    if(num > 0){
        numberOfPositive++;
    }
    num = +prompt("Enter number");
    i++;
}
console.log(`Number of positive digits are: ${numberOfPositive}`)