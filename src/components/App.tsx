interface Person {
  name: string;
  age: number;
  email: string;
}
/*---------------------*/
function greetPerson(person: Person): string {
  return `Hello, ${person.name}, you are ${person.age} years old and your email is "${person.email}"`;
}

/*---------------------*/
interface Book {
  readonly title: string;
  author: string;
  pages: number;
  isbn?: string;
  publishYear?: number;
}

/*---------------------*/
function createBookSummary(book: Book): string {
  return `Title: ${book.title}, Author: ${book.author}`;
}

/*---------------------*/
type Status = "pending" | "approved" | "rejected";
type Priority = "low" | "medium" | "high";

interface Task {
  id: number;
  title: string;
  status: Status;
  priority: Priority;
  dueDate?: Date;
}

function filterTask(tasks: Task[], status: Status): Task[] {
  return tasks.filter((task) => task.status === status);
}

/*---------------------*/
interface Vehicle {
  brand: string;
  model: string;
  year: number;
}

interface Car extends Vehicle {
  doors: number;
  fuelType: "gasoline" | "electric" | "hybrid";
}

interface Motorcycle extends Vehicle {
  engineSize: number;
  hasWindshield: boolean;
}

function calculateCarInsurance(car: Car): number {
  let baseCost = 500;
  let doorFactor = car.doors * 50;
  let fuelFactor =
    car.fuelType === "electric" ? -100 : car.fuelType === "hybrid" ? -50 : 0;
  return baseCost + doorFactor + fuelFactor;
}

function calculateCarInsurance(moto: Motorcycle): number {}
