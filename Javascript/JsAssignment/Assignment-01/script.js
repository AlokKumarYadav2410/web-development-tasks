console.log("Loaded")

// Logging and Interaction (console, alert, prompt)
// 1. Log name, age, and city using console.log, console.info, console.warn.
// 2. Use prompt to take user’s name → alert a welcome message.
// 3. Log typeof of user’s input.
// 4. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what
// happens.

let name = "Alok";
let age = 25;
let city = "Delhi";
console.log("Name:", name);
console.info("Age:", age);
console.warn("City:", city);

let userName = prompt("Your name?");
alert(`Welcome!!! ${userName}`);

console.log("Type of userName:", typeof userName);

let userAge = prompt("Enter age:");
console.log("User age plus 5:", Number(userAge) + 5);

// Working with Strings
// 1. let msg = “I love Sheryians”;
// 2. Try msg.slice(2, 6) and predict the result.
// 3. Try msg.split(” “) and count words.
// 4. Try msg.replace(“love”, “study at”).
// 5. Check if msg.includes(“love”)

let msg = "I love Sheryians";
console.log("msg.slice(2, 6):", msg.slice(2, 6)); // "love"
let words = msg.split(" ");
console.log(words)
console.log("Word count:", words.length);
console.log(msg.replace("love", "study at"));
console.log("Word include love: ", msg.includes("love"));
