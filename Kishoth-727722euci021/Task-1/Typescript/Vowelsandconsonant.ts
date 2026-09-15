declare var require: any;
declare var process: any;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (text: string) => {

    text = text.toLowerCase();

    let vowels = 0;
    let consonants = 0;

    for (let ch of text) {
        if (ch >= "a" && ch <= "z") {
            if (
                ch == "a" ||
                ch == "e" ||
                ch == "i" ||
                ch == "o" ||
                ch == "u"
            ) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    console.log("Vowels: " + vowels);
    console.log("Consonants: " + consonants);

});
