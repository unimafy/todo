import React, { useState } from "react"

interface Item {
  id: number,
  text: string,
  completed: boolean
}

const TodoList = () => {
  const [todos, setTodos] = useState<Item[]>(
    [
      { id: 1, text: "Learn React!", completed: false },
      { id: 2, text: "Learn Vite!", completed: false },
      { id: 3, text: "Learn Typescrpt!", completed: false }
    ]
  );
  
  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    const newTodo: Item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="main-container">
      <h2>Todo Lists</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" onChange={(e => setInput(e.currentTarget.value))} />
      <button onClick={handleClick}>Add a Todo</button>
    </div>
  )
}

export default TodoList