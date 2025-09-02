interface User {
  id: string;
  name: string;
  age: number;
  phoneNumber?: number;
}

function greeting(user: User): string {
  return ` Hello, ${user.name}! Your id is ${user.id} and your age is ${user.age}`
}

const user1: User = {
  id: crypto.randomUUID(),
  name: "Vlad",
  age: 30,
}

console.log(greeting(user1))

export default function App() {
  return <div>Check the console for results</div>
}