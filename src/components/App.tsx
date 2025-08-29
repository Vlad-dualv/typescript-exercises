
type Operation = "add" | "subtract" | "multiply" | "divide"

function calculator(n1: number, n2: number, operation: Operation): number | string {
  switch (operation) {
    case "add":
      return n1 + n2
    case "subtract":
      return n1 - n2;
    case "multiply":
      return n1 * n2
    case "divide":
      if (n2 === 0) {
        return "Cannot divide by zero"
      }
      return n1 / n2
    default:
      return "Unknown operation"
  }
} 

console.log(calculator(2, 2, "add"))
console.log(calculator(2, 2, "subtract"))
console.log(calculator(2, 2, "multiply"))
console.log(calculator(2, 2, "divide"))

export default function App() {
  return <div>Check the console</div>
}