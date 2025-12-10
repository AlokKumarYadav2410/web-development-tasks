// Error Handling
// 1. syntax errors -> mistakes in the code that prevent it from running
// leh a = 5; // missing 'let' keyword syntax error

// 2. runtime errors -> errors that occur while the code is running
let obj = null;
// console.log(obj.name); // TypeError: Cannot read property 'name' of null

// 3. logical errors -> errors in the logic that produce incorrect results
function add(a, b) {
    return a - b; // should be a + b
}
console.log(add(5, 3)); // Outputs 2 instead of 8

// Try-Catch-Finally
try {
    // Code that may throw an error
    let result = add(5, 3);
    console.log("Result:", result);
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
} finally {
    // Code that runs regardless of an error occurring
    console.log("Execution completed.");
}

// Throwing Custom Errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error("Error:", error.message);
    console.error("Error:", error.stack);
    console.error("Error:", error.type);
}