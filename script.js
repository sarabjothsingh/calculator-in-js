const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");

let currentInput = "";
let operator = null;
let previousInput = "";

// Add event listeners to all number and operator buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // Handle number or decimal input
        if (!isNaN(value) || value === ".") {
            currentInput += value;
            result.value = currentInput;
        } 
        // Handle the equal sign for calculation
        else if (value === "=") {
            if (previousInput && operator && currentInput) {
                result.value = eval(`${previousInput} ${operator} ${currentInput}`);
                currentInput = result.value;
                previousInput = "";
                operator = null;
            }
        } 
        // Handle operator input
        else {
            operator = value;
            previousInput = currentInput;
            currentInput = "";
        }
    });
});

// Add event listener to the clear button
clearButton.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = null;
    result.value = "";
});
