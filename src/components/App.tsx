// TypeScript Basic Type Declaration Exercises
// Add type annotations to the following variables and functions

// Exercise 1: Declare a variable for a person's name
const personName: string = "Alice";

// Exercise 2: Declare a variable for someone's age
const age: number = 25;

// Exercise 3: Declare a variable for whether someone is a student
const isStudent: boolean = true;

// Exercise 4: Declare a variable that can hold either a string or number
const id: string | number = "user123";

// Exercise 5: Declare an array of numbers
const scores: number[] = [85, 92, 78, 96];

// Exercise 6: Declare an array of strings
const colors: string[] = ["red", "green", "blue"];

// Exercise 7: Declare a function that takes a string parameter and returns a string
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Exercise 8: Declare a function that takes two numbers and returns a number
function add(a: number, b: number): number {
  return a + b;
}

// Exercise 9: Declare a function that takes a boolean parameter and returns nothing
function toggleLight(isOn: boolean): void {
  console.log(isOn ? "Light is on" : "Light is off");
}

// Exercise 10: Declare an object type for a book with title, author, and page count
const book: { title: string; author: string; pages: number } = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
};

// SOLUTIONS (uncomment to see the answers):

/*
// Exercise 1: Declare a variable for a person's name
let personName: string = "Alice";

// Exercise 2: Declare a variable for someone's age
let age: number = 25;

// Exercise 3: Declare a variable for whether someone is a student
let isStudent: boolean = true;

// Exercise 4: Declare a variable that can hold either a string or number
let id: string | number = "user123";

// Exercise 5: Declare an array of numbers
let scores: number[] = [85, 92, 78, 96];

// Exercise 6: Declare an array of strings
let colors: string[] = ["red", "green", "blue"];

// Exercise 7: Declare a function that takes a string parameter and returns a string
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Exercise 8: Declare a function that takes two numbers and returns a number
function add(a: number, b: number): number {
    return a + b;
}

// Exercise 9: Declare a function that takes a boolean parameter and returns nothing
function toggleLight(isOn: boolean): void {
    console.log(isOn ? "Light is on" : "Light is off");
}

// Exercise 10: Declare an object type for a book with title, author, and page count
let book: { title: string; author: string; pages: number } = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
};
*/
