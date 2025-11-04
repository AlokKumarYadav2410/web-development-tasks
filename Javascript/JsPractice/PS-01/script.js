function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if(playerChoice.toLowerCase() === computerChoice) return 'draw';
    if(playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissor') return "Player choosed rock and won!!!";
    if(playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') return "Player choosed paper and won!!!";
    if(playerChoice.toLowerCase() === 'scissor' && computerChoice === 'paper') return "Player choosed scissor and won!!!";

    return `computer choosed ${computerChoice} and won!!!`;
    
}

let playerChoice = prompt("Enter your choice - rock, paper, scissor");
console.log(playGame(playerChoice));



























// let a = function() {
//     console.log("Used as a variable");
// }

// a();

// function abcd(val){
//     val();
// }

// abcd(function(){
//     console.log("Passed as an argument");
// })
// abcd(() => {
//     console.log("Fat arrow Passed as an argument");
// })

// // Closure Example
// function parent(){
//     let a = 10;
//     return function child(){
//         console.log(a);
//     }
// }

// parent()();

// function makeCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// let counter = makeCounter();
// counter();
// counter();  
// counter();

// // Lexical Scoping
// let x = 10;

// function foo(){
//     console.log(x);
// }

// function bar(){
//     let x = 20;
//     foo();
// }

// bar(); // Outputs 10 due to lexical scoping

// // IIFE - Immediately Invoked Function Expression
// (function() {
//     console.log("This function runs immediately upon definition!");
// })();

// // Hoisting Example

// host;

// var host = function() {
//     console.log("This will cause an error because 'host' is not hoisted.");
// }

