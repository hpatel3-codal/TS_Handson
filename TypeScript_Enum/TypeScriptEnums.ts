// TypeScript Enums - Simple and Readable Example
// TypeScript allows you to define enums, which are a way to give friendly names to sets of numeric values.
// Enums are useful when you want to represent a collection of related constants.
// Here is an example of how to define and use enums in TypeScript.

enum CardinalDirections {
  North = 1,
  East,
  South,
  West,
}
// Using the enum
let move: CardinalDirections = CardinalDirections.North; // Assigning an enum value
console.log("Move direction:", move); // Output: Move direction: 1

// Example: Enum with string values
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
// Using the enum
let favoriteColor: Color = Color.Green; // Assigning a string enum value
console.log("Favorite color:", favoriteColor); // Output: Favorite color: GREEN

// Example: Enum with mixed values
enum Status {
  Active = 1,
  Inactive = "INACTIVE",
  Pending = 2,
}
// Using the mixed enum
let currentStatus: Status = Status.Active; // Assigning a mixed enum value
console.log("Current status:", currentStatus); // Output: Current status: 1
// Example: Enum with computed values
enum Days {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
// Using the computed enum
let today: Days = Days.Wednesday; // Assigning a computed enum value
console.log("Today is day number:", today); // Output: Today is day number: 3

// Example: Enum with constant values
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500,
}
// Using the constant enum
let responseStatus: HttpStatus = HttpStatus.OK; // Assigning a constant enum value
console.log("Response status:", responseStatus); // Output: Response status: 200
