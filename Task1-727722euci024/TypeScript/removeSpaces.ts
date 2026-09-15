import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Removes all whitespace characters (spaces, tabs, newlines) from the given string.
 *
 * @param inputText - the string to process
 * @returns the string with all whitespace removed
 */
function removeAllSpaces(inputText: string): string {
  return inputText.replace(/\s+/g, "");
}

rl.question("Enter a string: ", (userInput: string) => {
  const result: string = removeAllSpaces(userInput);
  console.log(`Result: ${result}`);
  rl.close();
});
