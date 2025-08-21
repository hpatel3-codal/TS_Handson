// TypeScript Union Types Example
// Union types allow a variable to hold multiple types of values.
// This is useful when a value can be one of several types.

function printId(id: number | string) {
    console.log(`ID: ${id}`);
}

printId(101); // number
printId("202"); // string
