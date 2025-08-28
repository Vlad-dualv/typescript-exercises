interface User {
  id: number;
  name: string;
  email:string;
  isActive: boolean;
  age?: number;
}

function createUser(user: User): User {
  return {...user};
}

const user = createUser({
  id: 1,
  name: 'John Doe',
  email: "john@example.com",
  isActive: true,
  age: 30,
});
console.log(user);

export default function App() {
  return <div>Check the console for output</div>;
}

