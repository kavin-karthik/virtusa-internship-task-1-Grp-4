declare var require: any;
declare var process: any;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first string: ", (first: string) => {

    rl.question("Enter second string: ", (second: string) => {

        let word1 = first.toLowerCase().split("").sort().join("");
        let word2 = second.toLowerCase().split("").sort().join("");

        if (word1 == word2) {
            console.log("Anagram");
        } else {
            console.log("Not Anagram");
        }

    });
});
