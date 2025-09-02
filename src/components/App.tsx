function calculate(input: string | number): number {
  if (typeof input === "string") {
    return input.length
  } else {
 return input * input
  }
   
  
}

export default function App() {
  return <div>Check the console for results</div>
}