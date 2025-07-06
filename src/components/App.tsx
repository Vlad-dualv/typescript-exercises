# TypeScript Return Types - 10 Exercises

## Exercise 1: Basic Return Type Annotations
**Difficulty: Beginner**

Complete the following functions by adding explicit return type annotations:


// Add return type annotations to these functions

function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string):string {
    return `Hello, ${name}!`;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}


## Exercise 2: Void vs Undefined Return Types
**Difficulty: Beginner**

Explain the difference and provide examples for `void` and `undefined` return types:


// Fix these function signatures
function logMessage(message: string): void {
    console.log(message);
}

function processData(data: string[]): undefined {
    data.forEach(item => console.log(item));
    return undefined;
}

function validateInput(input: string): void {
    if (!input) {
        return;
    }
    console.log("Valid input");
}


**Question:** When should you use `void` vs `undefined`?

---

## Exercise 3: Union Return Types
**Difficulty: Intermediate**

Create functions that return union types:

// Complete this function that returns either a number or an error message
function divide(a: number, b: number): number | string {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Create a function that returns either a User object or null
interface User {
    id: number;
    name: string;
}

function findUser(id: number): User | null {
    // Simulate database lookup
    const users: User[] = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ];
    
    // Your implementation here
}
```

---

## Exercise 4: Generic Return Types
**Difficulty: Intermediate**

Implement generic functions with proper return type annotations:


// Create a generic function that returns the first element of an array
function getFirst<T>(arr: T[]): ??? {
    return arr[0];
}

// Create a generic function that wraps a value in a Result type
interface Result<T> {
    success: boolean;
    data: T | null;
    error: string | null;
}

function createResult<T>(value: T): ??? {
    return {
        success: true,
        data: value,
        error: null
    };
}

// Test your implementations
const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirst(numbers); // Should be number | undefined
const result = createResult("Hello"); // Should be Result<string>
```

---

## Exercise 5: Function Return Type Inference
**Difficulty: Intermediate**

Analyze and predict the inferred return types:

```typescript
// What will TypeScript infer as the return type for each function?
function mystery1() {
    if (Math.random() > 0.5) {
        return "success";
    }
    return 42;
}

function mystery2() {
    const values = [1, 2, 3];
    return values.map(x => x * 2);
}

function mystery3() {
    return {
        name: "John",
        age: 30,
        isActive: true
    };
}

// Write the explicit return types for each function
function mystery1(): ??? { /* ... */ }
function mystery2(): ??? { /* ... */ }
function mystery3(): ??? { /* ... */ }
```

---

## Exercise 6: Conditional Return Types
**Difficulty: Advanced**

Create functions using conditional types for return values:

```typescript
// Create a function that returns different types based on a boolean parameter
function getValue<T extends boolean>(
    returnString: T
): T extends true ? string : number {
    if (returnString) {
        return "Hello" as any;
    }
    return 42 as any;
}

// Fix the implementation to make it type-safe
// The function should return string when returnString is true, number when false

// Test cases:
const str = getValue(true);   // Should be string
const num = getValue(false);  // Should be number
```

---

## Exercise 7: Promise Return Types
**Difficulty: Intermediate**

Work with async functions and Promise return types:

```typescript
// Add proper return type annotations to these async functions
async function fetchUserData(id: number) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    return {
        id,
        name: "User " + id,
        email: `user${id}@example.com`
    };
}

async function processFile(filename: string) {
    try {
        // Simulate file processing
        await new Promise(resolve => setTimeout(resolve, 200));
        return { success: true, message: "File processed" };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// What are the return types of these functions?
// fetchUserData return type: ???
// processFile return type: ???
```

---

## Exercise 8: Mapped Types and Return Types
**Difficulty: Advanced**

Create utility functions using mapped types:

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Create a function that returns a partial update object
function createUserUpdate<K extends keyof User>(
    field: K,
    value: User[K]
): ??? {
    return { [field]: value } as Pick<User, K>;
}

// Create a function that returns all fields as optional
function makeOptional<T>(obj: T): ??? {
    return { ...obj };
}

// Test your implementations
const nameUpdate = createUserUpdate("name", "Alice");
const optionalUser = makeOptional({ id: 1, name: "Bob" });
```

---

## Exercise 9: Recursive Return Types
**Difficulty: Advanced**

Implement functions with recursive return types:

```typescript
// Define a nested object type
interface NestedObject {
    value: number;
    children?: NestedObject[];
}

// Create a function that flattens nested objects
function flattenObject(obj: NestedObject): ??? {
    let result = [obj.value];
    
    if (obj.children) {
        for (const child of obj.children) {
            result.push(...flattenObject(child));
        }
    }
    
    return result;
}

// Create a function that deeply converts all number properties to strings
function stringifyNumbers<T>(obj: T): ??? {
    if (typeof obj === 'number') {
        return String(obj);
    }
    if (typeof obj === 'object' && obj !== null) {
        const result: any = {};
        for (const key in obj) {
            result[key] = stringifyNumbers(obj[key]);
        }
        return result;
    }
    return obj;
}
```

---

## Exercise 10: Advanced Return Type Patterns
**Difficulty: Expert**

Combine multiple advanced concepts:

```typescript
// Create a builder pattern with method chaining
class QueryBuilder {
    private query: string = "";
    
    select(fields: string[]): ??? {
        this.query += `SELECT ${fields.join(", ")} `;
        return this;
    }
    
    from(table: string): ??? {
        this.query += `FROM ${table} `;
        return this;
    }
    
    where(condition: string): ??? {
        this.query += `WHERE ${condition} `;
        return this;
    }
    
    build(): ??? {
        return this.query.trim();
    }
}

// Create a function that returns different types based on input
function apiCall<T extends 'user' | 'post' | 'comment'>(
    endpoint: T
): Promise<
    T extends 'user' ? UserResponse :
    T extends 'post' ? PostResponse :
    T extends 'comment' ? CommentResponse :
    never
> {
    // Implementation would go here
    return null as any;
}

interface UserResponse { id: number; name: string; }
interface PostResponse { id: number; title: string; content: string; }
interface CommentResponse { id: number; text: string; postId: number; }

// Test the implementations
const builder = new QueryBuilder();
const query = builder
    .select(['name', 'email'])
    .from('users')
    .where('age > 18')
    .build();

const userPromise = apiCall('user');     // Should be Promise<UserResponse>
const postPromise = apiCall('post');     // Should be Promise<PostResponse>
```

---

## Answer Key Summary

**Exercise 1:** `number`, `string`, `boolean`

**Exercise 2:** Use `void` for functions that don't return values, `undefined` for functions that explicitly return undefined

**Exercise 3:** `number | string`, `User | null`

**Exercise 4:** `T | undefined`, `Result<T>`

**Exercise 5:** `string | number`, `number[]`, `{ name: string; age: number; isActive: boolean; }`

**Exercise 6:** Conditional types based on generic constraints

**Exercise 7:** `Promise<{id: number; name: string; email: string}>`, `Promise<{success: boolean; message?: string; error?: string}>`

**Exercise 8:** `Pick<User, K>`, `Partial<T>`

**Exercise 9:** `number[]`, recursive mapped type that converts numbers to strings

**Exercise 10:** Method chaining with `this`, conditional types with mapped unions