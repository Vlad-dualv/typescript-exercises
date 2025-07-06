// TypeScript Basic Type Declaration Exercises
// Complete each exercise by adding the correct type annotations

// Exercise 1: Declare a variable for a person's name
// TODO: Add type annotation
const personName: string = "Alice";

// Exercise 2: Declare a variable for someone's age
// TODO: Add type annotation
const age: number = 25;

// Exercise 3: Declare a variable that indicates if a task is completed
// TODO: Add type annotation
const isCompleted: boolean = true;

// Exercise 4: Declare a variable that can hold either a string or number
// TODO: Add type annotation
const identifier: string | number = "ABC123";

// Exercise 5: Declare an array of numbers for test scores
// TODO: Add type annotation
const testScores: number[] = [85, 92, 78, 96];

// Exercise 6: Declare an array of strings for city names
// TODO: Add type annotation
const cities: string[] = ["New York", "London", "Tokyo"];

// Exercise 7: Declare an object type for a book with title and author
// TODO: Add type annotation
const book: { title: string; author: string } = {
  title: "1984",
  author: "George Orwell",
};

// Exercise 8: Declare an object type for a user with name, email, and optional age
// TODO: Add type annotation (age should be optional)
const user: { name: string; email: string; age?: number } = {
  name: "John Doe",
  email: "john@example.com",
};

// Exercise 9: Declare a function that takes two numbers and returns their sum
// TODO: Add type annotations for parameters and return type
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Exercise 10: Declare a function that takes a string and returns nothing (void)
// TODO: Add type annotations for parameter and return type
function logMessage(message: string): void {
  console.log(message);
}

// BONUS: Try to compile this file with TypeScript compiler (tsc)
// to see if your type annotations are correct!
