import { useState, useEffect } from "react"
import List from '@mui/material/List';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

// const initialTodos = [
//     { id: 1, text: "walk the dog", completed: false },
//     { id: 2, text: "walk the cat", completed: false },
//     { id: 3, text: "walk the fish", completed: true },
//     { id: 4, text: "walk the chickens", completed: false },
// ]

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) {
        return []
    } else {
        return data;
    }
}

function TodoList() {

    const [todos, setTodos] = useState(getInitialData)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id)
        })
    }

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((t) => {
                if(t.id === id) {
                    return {...t, completed: !t.completed}
                } else {
                    return t;
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { text: text, id: 8, completed: false }]
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} toggle={() => toggleTodo(todo.id)} />
            ))}
            <TodoForm addTodo={addTodo} />
        </List>
    )
}

export default TodoList;