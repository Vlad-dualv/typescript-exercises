let userAge: number;
let userName: string;
let userActive: boolean;
let userBalance = number;

let colors: string[];
let scores: number[];
let taskStatuses: boolean[];

let book: {
  title: string;
  author: string;
  pages: number;
  isAvailabel: boolean;
};

function sum(a: number, b: number): number {
  return a + b;
}

function strLenght(str: string): number {
  return str.length;
}

function booleanConsole(boolean: boolean): void {
  console.log(boolean);
}

let stringOrNumber: string | number;
let nullOrString: string | null;
let size: "small" | "medium" | "large";

let userProfile: { name: string; email: string; age?: number; bio?: string };

let coordinates: [number, number];
let userInfo: [string, number];
let colorRGB = [number, number, number];

let loadingState = "loading";
let magicNumber = 42;
type status = "success" | "error";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

let product: Product;

function greeting(user: { name: string; age: number; email: string }): string {
  return `Hello, ${user.name}`;
}
