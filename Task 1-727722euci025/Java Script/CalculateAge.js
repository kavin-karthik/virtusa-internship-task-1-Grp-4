let dob = prompt("Enter your date of birth (DD/MM/YYYY):");

let parts = dob.split("/");

let day = parseInt(parts[0]);
let month = parseInt(parts[1]) - 1;
let year = parseInt(parts[2]);

let birthDate = new Date(year, month, day);
let today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
     today.getDate() < birthDate.getDate())
) {
    age--;
}

console.log("Your age is: " + age);