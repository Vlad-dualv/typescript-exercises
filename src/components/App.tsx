# TypeScript Return Types - 10 Exercises

## Exercise 1: Basic Return Type Annotation
**Difficulty: Beginner**

Write a function `calculateArea` that takes two parameters (`width` and `height`, both numbers) and returns their product. Explicitly annotate the return type.


function calculateArea(width: number, height: number): number {
  return width * height;
}

console.log(calculateArea(5, 3)); // Should output: 15

Create a function `formatValue` that accepts a boolean parameter `asString`. If `asString` is true, return the string "42", otherwise return the number 42. Use a union type for the return type.


function formatValue(asString: boolean): string | number {
  return asString ? "42" : 42
}
```

**Expected behavior:**
```typescript
console.log(formatValue(true));  // Should output: "42"
console.log(formatValue(false)); // Should output: 42
```

---

## Exercise 3: Object Return Type
**Difficulty: Beginner-Intermediate**

Write a function `createUser` that takes a name (string) and age (number) as parameters and returns an object with these properties plus an `isActive` property set to true. Define the return type explicitly.

```typescript
// Your code here
function createUser(name: string, age: number): {name: string; age: number; isActive : boolean} {
  return {name, age, isActive: true}
}


const user = createUser("Alice", 25);
console.log(user); // Should output: { name: "Alice", age: 25, isActive: true }


Create a function `getEvenNumbers` that takes an array of numbers and returns only the even numbers. Specify the return type as an array of numbers.


function getEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0)
}
```

**Expected behavior:**
```typescript
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Should output: [2, 4, 6]
```

---

## Exercise 5: Generic Return Type
**Difficulty: Intermediate**

Write a generic function `getFirstItem` that takes an array of any type and returns the first item or `undefined` if the array is empty. Use generics for the return type.

```typescript
// Your code here
function getFirstItem</* Add generic parameter */>(items: /* Add parameter type */): /* Add return type */ {
  // Implementation here
}
```

**Expected behavior:**
```typescript
console.log(getFirstItem([1, 2, 3]));        // Should output: 1
console.log(getFirstItem(["a", "b", "c"]));  // Should output: "a"
console.log(getFirstItem([]));               // Should output: undefined
```

---

## Exercise 6: Promise Return Type
**Difficulty: Intermediate**

Create an async function `fetchUserData` that simulates fetching user data. It should return a Promise that resolves to an object with `id` (number), `name` (string), and `email` (string) properties.

```typescript
// Your code here
async function fetchUserData(userId: number): /* Add Promise return type */ {
  // Simulate API call with setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "John Doe",
        email: "john@example.com"
      });
    }, 1000);
  });
}
```

**Expected behavior:**
```typescript
fetchUserData(1).then(user => console.log(user));
// Should output: { id: 1, name: "John Doe", email: "john@example.com" }
```

---

## Exercise 7: Conditional Return Type
**Difficulty: Intermediate-Advanced**

Create a function `processData` that uses a generic type parameter with a conditional return type. If the input is a string, return its length (number). If the input is a number, return its string representation.

```typescript
// Your code here
function processData<T extends string | number>(
  data: T
): /* Add conditional return type */ {
  // Implementation here
}
```

**Expected behavior:**
```typescript
console.log(processData("hello"));  // Should output: 5
console.log(processData(42));       // Should output: "42"
```

---

## Exercise 8: Function Return Type with Type Guards
**Difficulty: Advanced**

Write a function `parseValue` that takes a string and tries to parse it as a number. If successful, return an object `{ success: true, value: number }`. If failed, return `{ success: false, error: string }`. Use a discriminated union for the return type.

```typescript
// Your code here
function parseValue(input: string): /* Add discriminated union return type */ {
  // Implementation here
}
```

**Expected behavior:**
```typescript
console.log(parseValue("42"));    // Should output: { success: true, value: 42 }
console.log(parseValue("hello")); // Should output: { success: false, error: "Invalid number" }
```

---

## Exercise 9: Mapped Return Type
**Difficulty: Advanced**

Create a function `transformObject` that takes an object and a transformer function, then returns a new object with the same keys but transformed values. Use mapped types for the return type.

```typescript
// Your code here
function transformObject<T, U>(
  obj: T,
  transformer: (value: T[keyof T]) => U
): /* Add mapped return type */ {
  // Implementation here
}
```

**Expected behavior:**
```typescript
const original = { a: 1, b: 2, c: 3 };
const doubled = transformObject(original, x => x * 2);
console.log(doubled); // Should output: { a: 2, b: 4, c: 6 }
```

---

## Exercise 10: ReturnType Utility with Function Overloads
**Difficulty: Advanced**

Create a function `getValue` with multiple overloads that returns different types based on the input parameter type. Then create a type alias that extracts the return type of one of the overloads.

```typescript
// Your code here
function getValue(key: "name"): string;
function getValue(key: "age"): number;
function getValue(key: "isActive"): boolean;
function getValue(key: string): /* Add return type */ {
  // Implementation here
}

// Create a type alias for the return type when key is "name"
type NameReturnType = /* Use ReturnType utility */;
```

**Expected behavior:**
```typescript
console.log(getValue("name"));     // Should output: string
console.log(getValue("age"));      // Should output: number
console.log(getValue("isActive")); // Should output: boolean
```

---

## Answer Key

<details>
<summary>Click to reveal answers</summary>

### Exercise 1 Answer:
```typescript
function calculateArea(width: number, height: number): number {
  return width * height;
}
```

### Exercise 2 Answer:
```typescript
function formatValue(asString: boolean): string | number {
  return asString ? "42" : 42;
}
```

### Exercise 3 Answer:
```typescript
function createUser(name: string, age: number): { name: string; age: number; isActive: boolean } {
  return { name, age, isActive: true };
}
```

### Exercise 4 Answer:
```typescript
function getEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 === 0);
}
```

### Exercise 5 Answer:
```typescript
function getFirstItem<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}
```

### Exercise 6 Answer:
```typescript
async function fetchUserData(userId: number): Promise<{ id: number; name: string; email: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "John Doe",
        email: "john@example.com"
      });
    }, 1000);
  });
}
```

### Exercise 7 Answer:
```typescript
function processData<T extends string | number>(
  data: T
): T extends string ? number : string {
  return (typeof data === 'string' ? data.length : data.toString()) as T extends string ? number : string;
}
```

### Exercise 8 Answer:
```typescript
function parseValue(input: string): { success: true; value: number } | { success: false; error: string } {
  const parsed = Number(input);
  if (isNaN(parsed)) {
    return { success: false, error: "Invalid number" };
  }
  return { success: true, value: parsed };
}
```

### Exercise 9 Answer:
```typescript
function transformObject<T, U>(
  obj: T,
  transformer: (value: T[keyof T]) => U
): { [K in keyof T]: U } {
  const result = {} as { [K in keyof T]: U };
  for (const key in obj) {
    result[key] = transformer(obj[key]);
  }
  return result;
}
```

### Exercise 10 Answer:
```typescript
function getValue(key: "name"): string;
function getValue(key: "age"): number;
function getValue(key: "isActive"): boolean;
function getValue(key: string): string | number | boolean {
  switch (key) {
    case "name": return "John Doe";
    case "age": return 25;
    case "isActive": return true;
    default: return "unknown";
  }
}

type NameReturnType = ReturnType<typeof getValue>;
// Alternative: type NameReturnType = string; (if targeting specific overload)
```

</details>