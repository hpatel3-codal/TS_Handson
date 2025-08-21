// Typescript Generic Functions :

// Generics allows to creating "Type Variable" which can be used to be create classes, functions & type that don't need to explicitly define the types that they used.

// Example : 

function identity<T>(value : T) : T{
    return value;
}

const num = identity<number>(54);
const str = identity<string>("Himen");
console.log(num);
console.log(str);

// Using Array :

function createPair<S, T>(v1 : S, v2 : T): [S, T] {
    return [v1, v2];
}

const genData = createPair<string, number>('Hello',45);
console.log(genData);
const genDataNum = createPair<number,number>(1, 2);
console.log(genDataNum);