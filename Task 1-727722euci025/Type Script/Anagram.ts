let str1: string = prompt("Enter first string:") || "";
let str2: string = prompt("Enter second string:") || "";

str1 = str1.toLowerCase().replace(/ /g, "");
str2 = str2.toLowerCase().replace(/ /g, "");

if (str1.length !== str2.length) {
    console.log("Not anagrams");
} else {

    let arr1: string[] = str1.split("");
    let arr2: string[] = str2.split("");

    arr1.sort();
    arr2.sort();

    if (arr1.join("") === arr2.join("")) {
        console.log("Anagrams");
    } else {
        console.log("Not anagrams");
    }
}