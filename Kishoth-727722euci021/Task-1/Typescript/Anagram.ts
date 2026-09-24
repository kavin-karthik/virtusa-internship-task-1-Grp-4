
let str1: string = "listen";
let str2: string = "silent";

let s1 = str1.toLowerCase().split("").sort().join("");
let s2 = str2.toLowerCase().split("").sort().join("");

if (s1 === s2)
{
    console.log(str1 + " and " + str2 + " are Anagrams");
}
else
{
    console.log(str1 + " and " + str2 + " are Not Anagrams");
}
