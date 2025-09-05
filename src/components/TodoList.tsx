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
        
    }

    return (
        <div>
            
        </div>
    )
}

