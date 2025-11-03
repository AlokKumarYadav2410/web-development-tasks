console.log("Script 02 is added using defer")

// 3. Create a variable inside curly braces using let and log it outside.

{
    let first = "Inside Block";
    console.log(first); // This will work
}

// console.log(first) // This will throw an error: ReferenceError: first is not defined

// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)
const PI = 3.14159;
const BASE_URL = "https://api.example.com";
const MAX_USERS = 1000;

//6. Taking marks as input and grade according to the marks.
let marks = prompt("Enter your marks (0-100):");
marks = Number(marks);
function getGrade(marks) {
    if(marks >= 90 && marks <= 100) return 'A+';
    else if (marks >= 80) return 'A';
    else if (marks >= 70) return 'B';
    else if (marks >= 60) return 'C';
    else if (marks >= 0) return 'D';
    else return 'Invalid marks';
}

console.log(`Your grade is: ${getGrade(marks)}`);