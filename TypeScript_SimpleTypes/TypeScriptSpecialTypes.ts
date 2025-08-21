// TypeScript Special Types
// TypeScript provides special types that enhance type safety and functionality.    
// Here are some examples of special types in TypeScript.
// 1. `any` type: Represents any value, allowing for flexibility but sacrificing type safety.

let flexibleValue: any = "I can be anything!";
flexibleValue = 42; // Now it's a number
flexibleValue = true; // Now it's a boolean
console.log(flexibleValue); // Output: true

// Example:

let v: any = true;
v = "Now I'm a string";
console.log(v); // Output: Now I'm a string

// 2. `unknown` type: Similar to `any`, but safer as it requires type checking before use.
let uncertainValue: unknown = "I could be anything!";
if (typeof uncertainValue === "string") {
    console.log(uncertainValue.toUpperCase()); // Safe to use as a string
}

// Example:
let u: unknown = 42;
if (typeof u === "number") {
    console.log(u * 2); // Safe to use as a number
}