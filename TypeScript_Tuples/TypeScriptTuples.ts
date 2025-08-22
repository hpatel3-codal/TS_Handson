// TypeScript Tuples - Simple and Readable Example

// TypeScript allows you to create tuples, which are fixed-length arrays with specific types for each position.
// Tuples are useful when you want to group related values together, but each value can have a different type.
// Here is an example of how to define and use tuples in TypeScript.
// A tuple is a typed array with a pre-defined length and types for each index.

// Different between arrays and tuples:
// - Arrays can have any number of elements of the same type.
// - Tuples have a fixed number of elements, each with its own type.
// - Tuples are defined with specific types for each position, while arrays are typically homogeneous.
// - Tuples can be used to represent a record or a fixed structure, while arrays are more flexible collections.

// Tuples are like arrays, but with a fixed length and specific types for each position.

// Example: Array :
let numbers: number[] = [1, 2, 3]; // Array of numbers
console.log("Numbers array:", numbers); // [1, 2, 3]

// Example: Tuple :
let user1: [string, number, boolean] = ["Alice", 30, true]; // Tuple with string, number, and boolean
// Accessing tuple elements
console.log(`Name: ${user1[0]}, Age: ${user1[1]}, Active: ${user1[2]}`); // Name: Alice, Age: 30, Active: true

// Example: Tuple with string, number, and boolean
let user: [string, number, boolean] = ["Alice", 30, true];
console.log("User tuple:", user); // ["Alice", 30, true]

// Tuple with two elements: string and number
let userInfo: [string, number] = ["Bob", 25];
console.log("UserInfo tuple:", userInfo); // ["Bob", 25]

// Accessing tuple elements
let userName = user[0]; // string
let userAge = user[1]; // number
let isActive = user[2]; // boolean
console.log(`Name: ${userName}, Age: ${userAge}, Active: ${isActive}`);

// Readonly tuple (cannot be changed)
let readonlyUser: readonly [string, number] = ["Charlie", 28];
// readonlyUser[0] = "Dave"; // Error: Cannot modify a readonly tuple
console.log("Readonly user:", readonlyUser);

// Another tuple example
let employee: [string, number, string] = ["Eve", 35, "Engineer"];
let employeeName = employee[0];
let employeeAge = employee[1];
let employeeRole = employee[2];
console.log(
  `Employee Name: ${employeeName}, Age: ${employeeAge}, Role: ${employeeRole}`
);

// Named tuple example
const Point: [x: number, y: number] = [10, 20]; // Named tuple with x and y coordinates
console.log(`Point coordinates: x=${Point[0]}, y=${Point[1]}`); // Point coordinates: x=10, y=20
