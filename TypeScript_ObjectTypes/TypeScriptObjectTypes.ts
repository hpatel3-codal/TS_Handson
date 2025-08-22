// Typescript Object Types Example
// TypeScript allows you to define complex types using objects.
// Here is an example of how to define and use object types in TypeScript.

const car: { make: string; model: string; year: number } = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
}; // Object type with properties make, model, and year

car.make = "Honda"; // Changing the make property
car.model = "Accord"; // Changing the model property
car.year = 2021; // Changing the year property
console.log(car); // Output: { make: 'Toyota', model: 'Camry', year: 2020 }

// Accessing object properties
const carMake: string = car.make; // Accessing the make property
const carModel: string = car.model; // Accessing the model property
const carYear: number = car.year; // Accessing the year property

console.log(`Car Make: ${carMake}, Model: ${carModel}, Year: ${carYear}`); // Output: Car Make: Toyota, Model: Camry, Year: 2020

// Defining an object type with optional properties
const person: { name: string; age?: number; isEmployed?: boolean } = {
  name: "Alice",
  age: 30,
}; // age and isEmployed are optional properties
console.log(person); // Output: { name: 'Alice', age: 30 }
