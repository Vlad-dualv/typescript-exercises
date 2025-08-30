type Role = "guest" | "admin"

interface User {
  name: string;
  age?: number;
  email: string;
  role: Role;
}

function checkAdmin(user: User): boolean {
  if (user.role === "admin") {
    return true
  } else {
    return false
  }
}

console.log(checkAdmin({
  name: "John",
  age: 30,
  email: "example@example.com",
  role: "guest"
}))


export default function App() {
  return <div>Check the console</div>
}