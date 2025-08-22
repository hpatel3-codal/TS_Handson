// Typescript have simple types like number, string, boolean, etc.
// Here is an example of how to assign these types to variables.

// boolean type : true or false values
// number type : any number
// string type : any text or characters

// We can assign the types as explicitly and implicitly.
let isActive: boolean = true; // Explicitly assigned boolean type
let count: number = 42; // Explicitly assigned number type
let message: string = "Hello, TypeScript!"; // Explicitly assigned string type

let isAvailable = false; // Implicitly assigned boolean type
let total = 100; // Implicitly assigned number type
let greeting = "Welcome to TypeScript!"; // Implicitly assigned string type

console.log(isActive, count, message);
console.log(isAvailable, total, greeting);

let n: null = null; // null type
let u: undefined = undefined; // undefined type
let big: bigint = 9007199254740991n; // bigint type (note the 'n' at the end)

// Why we need to use symbol type?
// The symbol type is used to create unique identifiers for object properties.
// It is often used to avoid name clashes in objects and to create private properties.
// Symbols are immutable and can be used as keys in objects.

let sym: symbol = Symbol("id"); // symbol type

console.log(n, u, big, sym);
