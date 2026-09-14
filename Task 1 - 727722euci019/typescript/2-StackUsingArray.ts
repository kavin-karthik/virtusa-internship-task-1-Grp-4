import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stack: number[] = [];

function push(value: number): void {
    stack.push(value);
    console.log(value + " pushed into stack");
}

function pop(): void {
    if (stack.length === 0) {
        console.log("Stack is empty");
    } else {
        console.log("Popped element: " + stack.pop());
    }
}

function peek(): void {
    if (stack.length === 0) {
        console.log("Stack is empty");
    } else {
        console.log("Top element: " + stack[stack.length - 1]);
    }
}

function display(): void {
    if (stack.length === 0) {
        console.log("Stack is empty");
    } else {
        console.log("Stack: " + stack);
    }
}

function menu(): void {
    console.log("\n1. Push");
    console.log("2. Pop");
    console.log("3. Peek");
    console.log("4. Display");
    console.log("5. Exit");

    rl.question("Enter your choice: ", (choice) => {

        if (choice === "1") {
            rl.question("Enter value: ", (value) => {
                push(Number(value));
                menu();
            });
        } 
        else if (choice === "2") {
            pop();
            menu();
        } 
        else if (choice === "3") {
            peek();
            menu();
        } 
        else if (choice === "4") {
            display();
            menu();
        } 
        else if (choice === "5") {
            console.log("Program ended");
            rl.close();
        } 
        else {
            console.log("Invalid choice");
            menu();
        }
    });
}

menu();
