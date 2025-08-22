// Typescript Classes :
// This file demonstrates the use of classes in TypeScript, including class declarations, constructors, properties, methods, inheritance, and access modifiers.

class Person{

    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person = new Person("Alice", 30);
console.log(person.greet());

// Member Access Modifiers

// Public, Private, and Protected
// Public: Accessible from anywhere
// Private: Accessible only within the class
// Protected: Accessible within the class and subclasses

class Employee {
    private id: number; // Private property, accessible only within the class
    public name: string; // Public property, accessible everywhere
    protected department: string; // Protected property, accessible in this class and subclasses

    // This is contructor. We do not need to add class name in constructor like Java & C++.
    constructor(id: number, name: string, department: string) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    getId(): number {
        return this.id;
    }

    getDetails(): string {
        return `Employee ID: ${this.getId()}, Name: ${this.name}, Department: ${this.department}`;
    }
}
const employee = new Employee(1, "Bob", "Engineering");
console.log(employee.getDetails());


// Paramereter Properties
// Parameter properties allow you to declare and initialize properties directly in the constructor parameters.
class Manager {
    constructor(
        public id: number, // Public property
        public name: string, // Public property
        protected department: string // Protected property
    ) {}

    getDetails(): string {
        return `Manager ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`;
    }
}

const manager = new Manager(2, "Charlie", "Sales");
console.log(manager.getDetails());

// Readonly Properties
// Readonly properties can only be assigned during initialization or in the constructor.

class ReadonlyEmployee {
    readonly id: number; // Readonly property
    readonly name: string; // Readonly property

    constructor(id: number, name: string) {
        this.id = id; // Can only be assigned here
        this.name = name; // Can only be assigned here
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

const readonlyEmployee = new ReadonlyEmployee(3, "David");
console.log(`Readonly Employee ID: ${readonlyEmployee.getId()}, Name: ${readonlyEmployee.getName()}`);

// Inheritance
// Inheritance allows a class to inherit properties and methods from another class.

class shape {
    constructor(public color: string) {}

    getColor(): string {
        return this.color;
    }
}
class Circle extends shape {
    constructor(color: string, public radius: number) {
        super(color); // Call the constructor of the parent class
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle("red", 5);
console.log(`Circle Color: ${circle.getColor()}, Radius: ${circle.radius}, Area: ${circle.getArea()}`);


// Interface :
interface Shape {

    getShapeArea: () => number;
}

class Ractangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {

    }

    public getShapeArea(): number {
        return this.width * this.height;
    }
} 

const shapeObj = new Ractangle(10,20);
console.log(shapeObj.getShapeArea());

// Override : 
// When a class extends another class, it can replace the members of the parent class with the same name.

class TestBase
{
    public runTest(): void {
    console.log("Base test running...");
  }
} 

class UiTest extends TestBase {

    override runTest(): void {
        console.log("Child test running...");
    }
}

const test = new UiTest();
test.runTest();

// Abstract Class :

// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.
// An abstract class is a class that cannot be instantiated directly.
//It is meant to be extended by other classes.
//It can have:
    // abstract methods/properties (must be implemented in child).
    // regular methods/properties (shared logic).
    // Think of it as a template or contract for subclasses.


abstract class Polygon {

    abstract getPolyArea() : number; // Abstract method

    // Non Abstract Method
    public PolyGonWidth(a : number ,b : number) : number {
        return a * b;
    }
}

class Triangle extends Polygon {

    public constructor(protected readonly a : number, protected readonly b : number) {
        super();
    }

    public getPolyArea(): number {
        return this.a * this.b;
    }
}

const absObject = new Triangle(1, 2);
console.log(absObject.getPolyArea());
console.log(absObject.PolyGonWidth(5, 6));