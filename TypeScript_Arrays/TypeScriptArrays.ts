// TypeScript Arrays - Simple and Readable Example
// TypeScript allows you to create arrays, which are collections of values of the same type.
// Here is an example of how to define and use arrays in TypeScript.

// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5]; // Only numbers allowed

// Array of strings
let fruits: string[] = ["apple", "banana", "cherry"]; // Only strings allowed

// Array with mixed types (number, string, boolean)
let mixedArray: (number | string | boolean)[] = [1, "two", 3, "four", true];

// Empty array that can hold any type
let emptyArray: any[] = [];
emptyArray.push("Hello"); // Add a string
emptyArray.push(42);      // Add a number
emptyArray.push(true);    // Add a boolean

console.log("Empty array after adding values:", emptyArray); // ["Hello", 42, true]

// Array of booleans
let booleanArray: boolean[] = [true, false, true];
console.log("Boolean array:", booleanArray); // [true, false, true]

// Print other arrays
console.log("Numbers array:", numbers);      // [1, 2, 3, 4, 5]
console.log("Fruits array:", fruits);        // ["apple", "banana", "cherry"]
console.log("Mixed array:", mixedArray);     // [1, "two", 3, "four", true]

// Readonly array (cannot be changed after creation)
let readonlyNumbers: readonly number[] = [10, 20, 30];
// readonlyNumbers.push(40); // ❌ Error: Cannot modify a readonly array
console.log("Readonly numbers:", readonlyNumbers); // [10, 20, 30]

// Type inference for arrays
let inferredArray = [1, 2, 3]; // TypeScript infers number[]
inferredArray.push(4);         // Allowed
// inferredArray.push("five"); // ❌ Error: Only numbers allowed
console.log("Inferred array:", inferredArray); // [1, 2, 3, 4]

// Accessing array elements
let firstElement: number | undefined = numbers[0]; // Get first element or undefined
console.log("First element of numbers array:", firstElement); //