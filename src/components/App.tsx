// TypeScript Basic Type Declaration Exercises - Set 2
// Complete each exercise by adding the correct type annotations

// Exercise 11: Declare a variable that can be null or a string
// TODO: Add type annotation
let optionalMessag: null | string = null;

// Exercise 12: Declare a variable that can be undefined or a number
// TODO: Add type annotation
let optionalCount: undefined | number = undefined;

// Exercise 13: Declare a tuple for storing coordinates (x, y)
// TODO: Add type annotation
let coordinates: [number, number] = [10, 20];

// Exercise 14: Declare a tuple for storing a person's name and age
// TODO: Add type annotation
let personInfo: [string, number] = ["Alice", 30];

// Exercise 15: Declare an enum for days of the week
// TODO: Create enum type
enum DaysOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}
// Add enum values

// Exercise 16: Declare a variable using the enum from exercise 15
// TODO: Add type annotation using the enum
let today: DaysOfWeek = DaysOfWeek.MONDAY;

// Exercise 17: Declare an object type for a car with make, model, and year
// TODO: Add type annotation
let car: { make: string; model: string; year: number } = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

// Exercise 18: Declare an object type for a product with name, price, and optional discount
// TODO: Add type annotation (discount should be optional)
let product: { name: string; price: number; discount?: number } = {
  name: "Laptop",
  price: 999.99,
};

// Exercise 19: Declare a function that takes a boolean and returns a string
// TODO: Add type annotations
function boolToString(value: boolean): string {
  return value ? "true" : "false";
}

// Exercise 20: Declare a function that takes no parameters and returns a number
// TODO: Add type annotations
function getRandomNumber(): number {
  return Math.random();
}

// Exercise 21: Declare a function parameter that can be either string or number
// TODO: Add type annotation for parameter
function processValue(value: string | number): void {
  console.log(`Processing: ${value}`);
}

// Exercise 22: Declare an array that can contain both strings and numbers
// TODO: Add type annotation
let mixedArray: (string | number)[] = ["hello", 42, "world", 123];

// Exercise 23: Declare an object with nested object properties
// TODO: Add type annotation for address object
let person: {
  name: string;
  address: { street: string; city: string; zipCode: string };
} = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
  },
};

// Exercise 24: Declare a function that takes an array of strings and returns a number
// TODO: Add type annotations
function countWords(words: string[]): number {
  return words.length;
}

// Exercise 25: Declare a variable that can be one of three specific string values
// TODO: Add type annotation (use literal types)
let status: "pending" | "success" | "failure" = "pending";

// Exercise 26: Declare a function with optional parameters
// TODO: Add type annotations (lastName should be optional)
function greetUser(firstName?: string, lastName?: string) {
  return lastName ? `Hello, ${firstName} ${lastName}!` : `Hello, ${firstName}!`;
}

// Exercise 27: Declare an array of objects representing students
// TODO: Add type annotation
let students: { name: string; grade: number }[] = [
  { name: "Alice", grade: 95 },
  { name: "Bob", grade: 87 },
];

// Exercise 28: Declare a function that returns either a string or null
// TODO: Add type annotations
function findUser(id): string | null {
  return id > 0 ? "User found" : null;
}

// Exercise 29: Declare an object with methods
// TODO: Add type annotation for calculator object
let calculator: {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
} = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

// Exercise 30: Declare a variable that can be any type (use any)
// TODO: Add type annotation
let dynamicValue: any = "This could be anything";

// BONUS: Try using 'unknown' instead of 'any' for exercise 30
// and see how TypeScript handles it differently!
