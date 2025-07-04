// TypeScript Intermediate Type Declaration Exercises
// Add appropriate type annotations to the following

// Exercise 1: Declare a variable that can be null or undefined along with a string
const username: string | undefined | null = null;

// Exercise 2: Declare an array that can contain both strings and numbers
const mixedData: (string | number)[] = ["hello", 42, "world", 15];

// Exercise 3: Declare a function that can return either a string or null
function findUser(id: number): string | null {
  if (id > 0) {
    return "User found";
  }
  return null;
}

// Exercise 4: Declare a tuple for storing a coordinate pair (x, y)
const coordinate = [10, 20];

// Exercise 5: Declare an enum for different user roles
enum UserRole {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
};

// Exercise 6: Declare a function that takes an optional parameter
function createMessage(text: string, urgent?: boolean) {
  return urgent ? `URGENT: ${text}` : text;
}

// Exercise 7: Declare a type for a user object with optional email
const user: { name: string; age: number; email?: string } = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

// Exercise 8: Declare a function that takes a callback function as parameter
function processData(data, callback) {
  const result = data.map((x) => x * 2);
  callback(result);
}

// Exercise 9: Declare a generic function that works with any array type
function getLastItem(arr<any>) {
  return arr[arr.length - 1];
}

// Exercise 10: Declare a discriminated union type for different shapes
const circle = {
  type: "circle",
  radius: 5,
};

const rectangle = {
  type: "rectangle",
  width: 10,
  height: 8,
};

// SOLUTIONS (uncomment to see the answers):

/*
// Exercise 1: Declare a variable that can be null or undefined along with a string
let username: string | null | undefined = null;

// Exercise 2: Declare an array that can contain both strings and numbers
let mixedData: (string | number)[] = ["hello", 42, "world", 15];

// Exercise 3: Declare a function that can return either a string or null
function findUser(id: number): string | null {
    if (id > 0) {
        return "User found";
    }
    return null;
}

// Exercise 4: Declare a tuple for storing a coordinate pair (x, y)
let coordinate: [number, number] = [10, 20];

// Exercise 5: Declare an enum for different user roles
enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

// Exercise 6: Declare a function that takes an optional parameter
function createMessage(text: string, urgent?: boolean): string {
    return urgent ? `URGENT: ${text}` : text;
}

// Exercise 7: Declare a type for a user object with optional email
let user: { name: string; age: number; email?: string } = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// Exercise 8: Declare a function that takes a callback function as parameter
function processData(data: number[], callback: (result: number[]) => void): void {
    const result = data.map(x => x * 2);
    callback(result);
}

// Exercise 9: Declare a generic function that works with any array type
function getLastItem<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

// Exercise 10: Declare a discriminated union type for different shapes
type Circle = {
    type: "circle";
    radius: number;
};

type Rectangle = {
    type: "rectangle";
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

let circle: Circle = {
    type: "circle",
    radius: 5
};

let rectangle: Rectangle = {
    type: "rectangle",
    width: 10,
    height: 8
};
*/
