let num = Number(prompt("Enter a number:"));

if (Number.isInteger(num)) {
    console.log("It is an integer");
} else {
    console.log("It is a floating-point number");
}