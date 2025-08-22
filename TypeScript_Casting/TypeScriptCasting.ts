// TypeScript Casting Example
// This file demonstrates type casting in TypeScript, including type assertions and the 'as' keyword.

// Casting with as keyword
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
console.log(`Length of the string: ${strLength}`);

// Casting with angle brackets
let anotherValue: unknown = "Hello, TypeScript!";
console.log((<string>anotherValue).toUpperCase());
console.log((<string>anotherValue).length);

// Force casting
let numericValue: any = "Himen";
let forcedNumber: number = <number>numericValue;
console.log(`Forced number: ${forcedNumber}`);
