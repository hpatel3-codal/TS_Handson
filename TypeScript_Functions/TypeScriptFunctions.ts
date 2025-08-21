// Typescript functions :
// This file demonstrates the use of functions in TypeScript, including function declarations, expressions, and arrow functions.
// Function Declaration

// Function Declarations with return types
function add(a: number, b: number): number {
    return a + b;
}
console.log(`Sum: ${add(5, 10)}`);

// Function declaration with optional parameters
function greetUser(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    return `Hello, ${name}!`;
}
console.log(greetUser("Alice", 30));

// Parameter with default value
function greet(name: string, number=1): string {
    return `Hello, ${name} number is ${number}!`;
}
console.log(greet("Bob"));

// Void return type function
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a log message.");

// Named Parameters
// Why use named parameters? // Named parameters allow you to pass arguments in any order, improving code readability.
function createUser({ name, age }: { name: string; age: number }): string {
    return `User created: Name - ${name}, Age - ${age}`;
}
const name = createUser({ name: "Alice", age: 30 });
console.log(name);

// Rest Parameters : 
// Rest parameters allow you to pass an indefinite number of arguments as an array.
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}   
console.log(`Total Sum: ${sumAll(1, 2, 3, 4, 5)}`);

// Type Aliases for Function Types
type MathOperation = (x: number, y: number) => number;

//in this example, we define a type alias for a function that takes two numbers and returns a number.
// We then create a function that matches this type.
const multiply: MathOperation = (x, y) => x * y;
console.log(`Multiplication: ${multiply(5, 10)}`);
