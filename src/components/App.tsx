interface Person {
  name: string;
  age: number;
  email?: string;
}

function greetPerson(person: Person): string {
  return `Hello, ${person.name}!`;
}

/*---------------------*/

type Status = "pending" | "approved" | "rejected" | "cancelled";

interface Application {
  id: number;
  applicantName: string;
  status: Status;
  sumbittedAt: Date;
}

/*---------------------*/

interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
}

class BasicCalculator implements Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    return a / b;
  }
}
