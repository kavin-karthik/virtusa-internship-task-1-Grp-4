import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 * Includes an early-exit optimization: if no swaps occur in a full pass,
 * the array is already sorted and the loop stops early.
 *
 * @param inputArray - the array of numbers to sort
 * @returns a new sorted array (the original array is not mutated)
 */
function bubbleSort(inputArray: number[]): number[] {
  const sortedArray: number[] = [...inputArray];
  const length: number = sortedArray.length;

  for (let i = 0; i < length - 1; i++) {
    let swappedThisPass = false;

    for (let j = 0; j < length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        // Swap adjacent elements that are out of order
        [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
        swappedThisPass = true;
      }
    }

    if (!swappedThisPass) {
      break;
    }
  }

  return sortedArray;
}

rl.question("Enter numbers separated by commas (e.g., 5,3,8,1): ", (userInput: string) => {
  const numbers: number[] = userInput
    .split(",")
    .map((value) => parseFloat(value.trim()))
    .filter((value) => !isNaN(value));

  const sortedNumbers: number[] = bubbleSort(numbers);
  console.log(`Sorted array: ${sortedNumbers.join(", ")}`);
  rl.close();
});
