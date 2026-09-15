let str: string = prompt("Enter a string:") || "";

let result: string = str.replace(/ /g, "");

console.log("String without spaces:", result);