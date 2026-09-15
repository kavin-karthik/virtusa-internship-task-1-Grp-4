import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Normalizes a string for anagram comparison by lowercasing it,
 * stripping non-alphanumeric characters, and sorting its characters.
 *
 * @param text - the raw input string
 * @returns a normalized, sorted representation of the string
 */
function normalizeForAnagram(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .sort()
    .join("");
}

/**
 * Determines whether two strings are anagrams of each other.
 *
 * @param firstString - the first string to compare
 * @param secondString - the second string to compare
 * @returns true if the strings are anagrams, false otherwise
 */
function areAnagrams(firstString: string, secondString: string): boolean {
  return normalizeForAnagram(firstString) === normalizeForAnagram(secondString);
}

rl.question("Enter the first string: ", (firstInput: string) => {
  rl.question("Enter the second string: ", (secondInput: string) => {
    const result: boolean = areAnagrams(firstInput, secondInput);
    console.log(result ? "The strings ARE anagrams." : "The strings are NOT anagrams.");
    rl.close();
  });
});
