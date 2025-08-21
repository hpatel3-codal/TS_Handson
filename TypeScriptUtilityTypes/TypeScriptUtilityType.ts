// Typescript Utility Types :

// Partial : Partial changes all the properties in an object to be optional.

interface User {
    id: number;
    name: string;
    email: string;
}

const updateUser: Partial<User> = {
    name: "Himen" //only update part of User
};

console.log(updateUser);

// Required : Required changes all the properties in an object to be required.

interface Car {
    make: string,
    model: string,
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'BMW',
    model: "E6",
    mileage: 26
};

console.log(myCar);

// Record : Defining an Object type with specific key type & value type.

const nameAgeMap: Record<string, number> = {
    'Himen': 31,
    'Jack': 26
}
console.log(nameAgeMap);

// Omit : It removes keys from an object type.

interface Person {
    name: string,
    age: number,
    location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Himen'
};
console.log(bob);

//Pick : It removes all but the spcified keys from object type.

interface Person {
    name: string,
    age: number,
    location?: string;
}

const bobName : Pick<Person, 'name'>= {
    name : 'Jack'
};
console.log(bobName);

// Exclude : Exclude removes types from a union.

type Status = "pass" | "fail" | "skip";
type Executed = Exclude<Status, "skip">; // "pass" | "fail"

// Return Type : It extracts the return type of a function type.

function createUser() {
  return { id: 1, name: "Himen" };
}

type UserType = ReturnType<typeof createUser>;
console.log(createUser());

// Parameters<T> : Gets the types of function parameters.

function login(username: string, password: string) {}
type LoginParams = Parameters<typeof login>;

// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.

interface Person {
  name: string;
  age: number;
}
const person: Readonly<Person> = {
  name: "Dylan",
  age: 35,
};
// person.name = 'Israel'; // It will be not allowing this.

console.log(person);


