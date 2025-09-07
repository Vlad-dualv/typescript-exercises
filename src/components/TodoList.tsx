import React, { useState } from "react"

interface Todo {
    id: number;
    text: string;
    completed: boolean
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [inputValue, setInputValue] = useState<string>("")

    function addTodo(text: string) {
        const newTodo: Todo = {
            id: Date.now(),
            text: text,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    function toggleTodo(id: number) {
      setTodos(todos.map(todo => todo.id === id ? {
        ...todo, completed: !todo.completed
      } : todo))
    }

    function deleteTodo(id: number) {
        const filteredTodos = todos.filter(todo => todo.id !== id)
        setTodos(filteredTodos)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const trimmedInput = inputValue.trim()
        if (trimmedInput === "") {
            alert("Please enter a todo!")
            return
        }

        if(trimmedInput.length > 50) {
            alert("Todo is too long!")
            return
        }

        const isDuplicate = todos.some(todo => todo.text.toLowerCase() === inputValue.trim().toLocaleLowerCase())

        if (isDuplicate) {
            alert("This todo already exists!")
            return
        }

        addTodo(trimmedInput)
        setInputValue("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add todo..."/>
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <p style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</p>
                        <button type="button" onClick={() => toggleTodo(todo.id)}>{todo.completed ? "Incomplete" : "Complete"}</button>
                        <button type="button" onClick={() => deleteTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

