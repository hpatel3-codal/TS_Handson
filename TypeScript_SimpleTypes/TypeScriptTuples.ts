// Typescript tuples Example

// TypeScript allows you to create tuples, which are arrays with fixed sizes and known types for each element.
// Here is an example of how to define and use tuples in TypeScript.


let user : [string, number, boolean] = ["Alice", 30, true]; // Tuple with string, number, and boolean types
console.log(user); // Output: ["Alice", 30, true]

let userInfo: [string, number];
userInfo = ["Bob", 25]; // Assigning values to the tuple
console.log(userInfo); // Output: ["Bob", 25]

// What is the happening If we try to assign a value that doesn't match the tuple type?
// userInfo = [30, "Charlie"]; // Error: Type 'number' is not assignable to type 'string'.

// Accessing tuple elements : 

let userName: string = user[0]; // Accessing the first element (string)
let userAge: number = user[1]; // Accessing the second element (number)
let isActive: boolean = user[2]; // Accessing the third element (boolean)
console.log(`Name: ${userName}, Age: ${userAge}, Active: ${isActive}`); // Output: Name: Alice, Age: 30, Active: true

// Readonly Tuples :
let readonlyUser: readonly [string, number] = ["Charlie", 28]; // Readonly tuple
// readonlyUser[0] = "Dave"; // Error: Index signature in type 'readonly [string, number]' only permits reading
console.log(readonlyUser[0]); // Output: Charlie
console.log(readonlyUser[1]); // Output: 28