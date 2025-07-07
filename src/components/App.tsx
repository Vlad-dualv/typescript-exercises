function concatenateStringAndNumber(str: string, num: number): string {
  return String(str + num);
}

/*----------------------------*/

function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

/*----------------------------*/

type Person = {
  name: string;
  age: string;
};
function greet(person: Person): string {
  return `Hello, ${person.name}`;
}

/*----------------------------*/

function getLength(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input;
  }
}

/*----------------------------*/

interface Book {
  title: string;
  author: string;
  pages: number;
  isbn?: boolean;
}

function getBookInfo(book: Book): string {
  const isbnInfo = book.isbn ? ` (ISBN: ${book.isbn})` : "";
  return `${book.title} by ${book.author}, ${book.pages} pages${isbnInfo}`;
}

/*----------------------------*/

interface UserProfile {
  username: string;
  email: string;
  age?: number;
  bio?: string;
}

function createProfile(
  username: string,
  email: string,
  age?: number,
  bio?: string
): UserProfile {
  const profile: UserProfile = { username, email };
  if (age !== undefined) profile.age = age;
  if (bio !== undefined) profile.bio = bio;
  return profile;
}

/*----------------------------*/

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

/*----------------------------*/

class Calculator {
  private currentValue: number;

  constructor(initialValue: number = 0) {
    this.currentValue = initialValue;
  }

  add(value: number): Calculator {
    this.currentValue += value;
    return this;
  }

  subtract(value: number): Calculator {
    this.currentValue -= value;
    return this;
  }

  getValue(): number {
    return this.currentValue;
  }
}

/*----------------------------*/

enum LogLevel {
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

function log(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

/*----------------------------*/

function processValue(value: unknown): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toString();
  } else {
    return "invalid type";
  }
}
