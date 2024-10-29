// Select the display input field
const display = document.getElementById("display");

// Function to append numbers to the display
function appendNumber(number) {
    display.value += number; // Adds the number to the end of the current display value
}

// Function to append operators to the display
function appendOperator(operator) {
    // Prevents appending an operator if the last character is already an operator
    if (display.value && !isNaN(display.value.slice(-1))) {
        display.value += operator; // Adds the operator to the end of the current display value
    }
}

// Function to clear the display (reset calculator)
function clearDisplay() {
    display.value = ""; // Sets display value to an empty string
}
// Function to evaluate the expression in the display
function calculate() {
    try {
        // Evaluate the expression and update the display
        display.value = eval(display.value); // Evaluates the mathematical expression in the display
    } catch (error) {
        display.value = "Error"; // Shows an error message if the evaluation fails
    }
}