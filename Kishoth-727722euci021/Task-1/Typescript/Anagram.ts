
let str: string = "Hello Kishoth";

let vowels: number = 0;
let consonants: number = 0;

str = str.toLowerCase();

for (let ch of str)
{
    if (ch >= 'a' && ch <= 'z')
    {
        if (
            ch === 'a' ||
            ch === 'e' ||
            ch === 'i' ||
            ch === 'o' ||
            ch === 'u'
        )
        {
            vowels++;
        }
        else
        {
            consonants++;
        }
    }
}

console.log("String      : " + str);
console.log("Vowels      : " + vowels);
console.log("Consonants  : " + consonants);
