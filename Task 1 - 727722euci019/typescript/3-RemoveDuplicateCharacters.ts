import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (str) => {
    let result = "";
    let seen = new Set<string>();

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result = result + char;
        }
    }

    console.log("After removing duplicates: " + result);

    rl.close();
});
