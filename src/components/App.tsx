interface User {
  name: string;
  age: number;
  email: string;
}

function greet(user: User): string {
  return `Hello, ${user.name}`;
}

/*----------------------------*/

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

/*----------------------------*/

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * value;
  } else {
    return 0;
  }
}

/*----------------------------*/

enum VehicleType {
  Car = "car",
  Truck = "truck",
  Motorcycle = "motorcycle",
  Bicycle = "bicycle",
}

function getWheelCount(vehicle: VehicleType): number {
  switch (vehicle) {
    case "car":
      return 4;
      break;
    case "truck":
      return 4;
      break;
    case "motorcycle":
      return 2;
      break;
    case "bicycle":
      return 2;
      break;
    default:
      return 0;
  }
}

/*----------------------------*/

interface Product {
  name: string;
  price: number;
  description?: string;
  inStock?: boolean;
}

function createProduct(
  name: string,
  price: number,
  description?: string,
  inStock: boolean = true
): Product {
  return { name: "", price: 0, description, inStock };
}

/*----------------------------*/

interface NumberStats {
  sum: number;
  average: number;
  positiveCount: number;
}

function analyzeNumbers(numbers: number[]): NumberStats {
  const sum = numbers.reduce((sum, num) => sum + num, 0);
  const average = sum / numbers.length;
  const positiveCount = numbers.filter((number) => number > 0);
  return { sum, average, positiveCount };
}

/*----------------------------*/

class BankAccount {
  private balance: number;
  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance = this.balance + amount;
    }
  }

  withdraw(amount: number): boolean {
    if (amount <= this.balance) {
      return true;
    } else {
      return false;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

/*----------------------------*/

interface Flyable {
  fly(): boolean;
}

interface Swimmable {
  swim(): boolean;
}

interface Duck extends Flyable, Swimmable {
  name: string;
  quack(): boolean;
}

function makeDuckActions(duck: Duck): string[] {
  return [duck.fly()];
}
