const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rgbToHex(red, green, blue) {
    return "#" +
        red.toString(16).padStart(2, "0").toUpperCase() +
        green.toString(16).padStart(2, "0").toUpperCase() +
        blue.toString(16).padStart(2, "0").toUpperCase();
}

rl.question("Enter Red, Green and Blue values: ", (input) => {
    let values = input.split(" ").map(Number);

    let red = values[0];
    let green = values[1];
    let blue = values[2];

    if (red < 0 || red > 255 ||
        green < 0 || green > 255 ||
        blue < 0 || blue > 255) {

        console.log("Enter values between 0 and 255");
    } else {
        console.log("Hexadecimal value:", rgbToHex(red, green, blue));
    }

    rl.close();
});
