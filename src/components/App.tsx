interface ObjectResult {
  sum: number;
  average: number;
  count: number;
}

function calculateNumbers(numbers: number[]): ObjectResult {
  const sum = numbers.reduce((acc, i) => acc + i, 0)
  const count = numbers.length
  const average = count === 0 ? 0 : sum /count
  return {
    sum,
    average,
    count
  }
}

console.log(calculateNumbers([1, 2, 3, 4]))

export default function App() {
  return <div>Check the console for results</div>
}