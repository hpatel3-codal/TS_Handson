// Typescript Arrays Example
// TypeScript allows you to work with arrays, which can hold multiple values of the same type   
// Here is an example of how to define and use arrays in TypeScript.

let numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let fruits: string[] = ["apple", "banana", "cherry"]; // Array of strings   
let mixedArray: (number | string)[] = [1, "two", 3, "four"]; // Array of mixed types

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(fruits); // Output: ["apple", "banana", "cherry"]
console.log(mixedArray); // Output: [1, "two", 3, "four"]

// Readonly Arrays
let readonlyNumbers: readonly number[] = [10, 20, 30]; // Readonly array of numbers
// readonlyNumbers.push(40); // Error: Property 'push' does not exist on type

// Type inference for Array
let inferredArray = [1, 2, 3]; // TypeScript infers this as number[]
inferredArray.push(4); // Allowed, as inferred type is number[]
console.log(inferredArray); // Output: [1, 2, 3, 4]

let firstElement: number | undefined = numbers[0]; // Accessing the first element of the numbers array
console.log(firstElement); // Output: 1