// TypeScript Basic Type Declaration Exercises
// Remove the 'any' types and replace them with proper type declarations

// Exercise 1: Basic variable types
// Declare the correct types for these variables
let userName: string = "Alice";
let userAge: number = 25;
let isActive: boolean = true;
let score: number = 89.5;

// Exercise 2: Array types
// Declare the correct types for these arrays
let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [1, 2, 3, 4, 5];
let flags: boolean[] = [true, false, true];

// Exercise 3: Function parameter and return types
// Add proper type annotations to parameters and return types
function greetUser(name: string, age: number): string {
    return `Hello ${name}, you are ${age} years old`;
}

function calculateArea(width: number, height: number): number {
    return width * height;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Exercise 4: Object type declaration
// Declare the correct type for this object
let user: {id: number; name: string; email: string; isVerified: boolean} = {
    id: 1,
    name: "John",
    email: "john@example.com",
    isVerified: true
};

// Exercise 5: Union types
// Some variables can have multiple types - use union types
let id: number | string = 123;        // Can be number or string
let response: string | number = "OK"; // Can be string or number

function processId(userId: string | number): string { // userId can be string or number
    return `Processing user: ${userId}`;
}

// Exercise 6: Optional properties
// Create a type for a product where some properties are optional
let product: {name: string; price: number; description?: string; inStock?: boolean} = {
    name: "Laptop",
    price: 999,
    // description is optional
    // inStock is optional
};

// Exercise 7: Function types
// Declare the type for these function variables
let mathOperation: (a: number, b: number) => number = (a: number, b: number) => a + b;
let stringFormatter: (text: string) => string = (text: string) => text.toUpperCase();

// Exercise 8: Tuple types
// These arrays have fixed length and specific types at each position
let coordinates: any = [40.7128, -74.0060]; // [latitude, longitude]
let nameAndAge: any = ["Bob", 30];          // [name, age]

// Exercise 9: Enum-like values
// Declare types for variables that can only have specific string values
let status: any = "pending";     // Can be "pending", "approved", or "rejected"
let theme: any = "dark";         // Can be "light" or "dark"

// Exercise 10: Complex nested object
// Declare the type for this nested object structure
let company: {name: string; employees: {name: string; role: string; salary: number}[]; founded: number; isPublic: boolean} = {
    name: "Tech Corp",
    employees: [
        { name: "Alice", role: "Developer", salary: 75000 },
        { name: "Bob", role: "Designer", salary: 65000 }
    ],
    founded: 2020,
    isPublic: false
};

// SOLUTIONS (uncomment to check your answers):

/*
// Exercise 1:
let userName: string = "Alice";
let userAge: number = 25;
let isActive: boolean = true;
let score: number = 89.5;

// Exercise 2:
let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [1, 2, 3, 4, 5];
let flags: boolean[] = [true, false, true];

// Exercise 3:
function greetUser(name: string, age: number): string {
    return `Hello ${name}, you are ${age} years old`;
}

function calculateArea(width: number, height: number): number {
    return width * height;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Exercise 4:
let user: { id: number; name: string; email: string; isVerified: boolean } = {
    id: 1,
    name: "John",
    email: "john@example.com",
    isVerified: true
};

// Exercise 5:
let id: number | string = 123;
let response: string | number = "OK";

function processId(userId: string | number): string {
    return `Processing user: ${userId}`;
}

// Exercise 6:
let product: { name: string; price: number; description?: string; inStock?: boolean } = {
    name: "Laptop",
    price: 999,
};

// Exercise 7:
let mathOperation: (a: number, b: number) => number = (a: number, b: number) => a + b;
let stringFormatter: (text: string) => string = (text: string) => text.toUpperCase();

// Exercise 8:
let coordinates: [number, number] = [40.7128, -74.0060];
let nameAndAge: [string, number] = ["Bob", 30];

// Exercise 9:
let status: "pending" | "approved" | "rejected" = "pending";
let theme: "light" | "dark" = "dark";

// Exercise 10:
let company: {
    name: string;
    employees: { name: string; role: string; salary: number }[];
    founded: number;
    isPublic: