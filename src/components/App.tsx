type Id = string | number;

function convert(id: Id): string | number {
  if (typeof(id) === "string") {
    return id.toUpperCase()
  } else if (typeof(id) === "number") {
    return id * 10
  } else {
    return "Unknown type id"
  }
}

console.log(convert(10))
console.log(convert("fadfdsf262"))

export default function App() {
  return <div>Check the console</div>
}