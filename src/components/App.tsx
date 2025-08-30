function getLastItem<T>(array: T[]): T | undefined {
  return array.at(-1)
}

const arr1 = [1, 2, 3, 4]
const arr2 = ["one", "two", "three", "four"]
const arr3 = [
  {
    name: "Vlad",
    age: 30,
  },
  {
    name: "Sara",
    age: 30,
  },
  {
    name: "Murka",
    age: 16,
  },
]

console.log(getLastItem(arr1))
console.log(getLastItem(arr2))
console.log(getLastItem(arr3))

export default function App() {
  return <div>Check the console</div>
}