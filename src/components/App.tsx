function format(input: Date | number, decimalPlaces?: number): string {
  if (input instanceof Date) {
    const yearToString = String(input.getFullYear())
    const monthToString = String(input.getMonth() + 1).padStart(2, "0")
    const dayToString = String(input.getDate()).padStart(2, "0")
    return `${monthToString}/${dayToString}/${yearToString}`
  } else if (typeof input === "number" && decimalPlaces !== undefined) {
    return String(input.toFixed(decimalPlaces))
  }
  return "Invalid input"
}

console.log(format(2.12356, 2))
const myDate = new Date(2023, 11, 25); // December 25, 2023 (remember month is 0-indexed)
console.log(format(myDate)); 

export default function App() {
  return <div>Check the console for results</div>
}

