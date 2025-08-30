interface User {
  name: string;
  email: string;
  age?: number;
  role?: string;
}

function createUser(name: string, email: string, age?: number, role: string = "user"): User {
  const user: User = {name, email, role}
  if (age !== undefined) {
    user.age = age;
  }
  return user
  }

  console.log(createUser("John", "john@email.com"));                    // Uses default role
console.log(createUser("Jane", "jane@email.com", 25));                // Uses default role, includes age
console.log(createUser("Bob", "bob@email.com", 30, "admin")); 

export default function App() {
  return <div>Check the console</div>
}