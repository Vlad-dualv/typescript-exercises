interface User {
  id: number;
  name: string;
  email: string;
}

type Result<T, E> = {success: true; data: T} | {success: false; error: E}

function fetchUser(id: number): Result<User, string> {
  if(id <= 0) {
    return {
      success: false, error: "Invalid user ID"
    }
  }
  if (id === 999) {
    return {
      success: false, error: "User not found"
    }
  }
  return {
    success: true,
    data: {
      id,
      name: `User ${id}`,
      email: `user${id}@example.com`
    }
  }
}

function handleUserResult(result: Result<User, string>): void {
  if (result.success) {
    console.log("✅ Success! User found:");
    console.log(`Name: ${result.data.name}`);
    console.log(`Email: ${result.data.email}`);
  } else {
    console.log("❌ Error:", result.error);
  }
}

export default function App() {
  return <div>Check the console for results</div>
}

