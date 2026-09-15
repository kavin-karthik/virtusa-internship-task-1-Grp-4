const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Determines whether a given number is an integer or a floating-point number,
 * using JavaScript's built-in Number.isInteger check.
 *
 * @param {number} value - the number to check
 * @returns {string} "Integer" or "Floating-point"
 */
function checkNumberType(value) {
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error("Input is not a valid number.");
  }
  return Number.isInteger(value) ? "Integer" : "Floating-point";
}

rl.question("Enter a number: ", (userInput) => {
  const numericValue = parseFloat(userInput);

  try {
    const numberType = checkNumberType(numericValue);
    console.log(`${numericValue} is a ${numberType} number.`);
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
});
