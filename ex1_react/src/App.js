import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoListFilter from "./components/TodoListFilter";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]); // State to store todos
  const [filter, setFilter] = useState("All"); // State to store current filter

  function addTodo(task) {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos(function (prevTodos) {
      return [...prevTodos, newTodo];
    }); // Add new todo to list
  }

  function toggleTodo(id) {
    setTodos(function (prevTodos) {
      return prevTodos.map(function (todo) {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos(function (prevTodos) {
      return prevTodos.filter(function (todo) {
        return todo.id !== id;
      });
    }); // Remove todo
  }

  function editTodo(id, newTask) {
    setTodos(function (prevTodos) {
      return prevTodos.map(function (todo) {
        return todo.id === id ? { ...todo, task: newTask } : todo;
      });
    });
  }

  function getFilteredTodos() {
    if (filter === "Active")
      return todos.filter(function (todo) {
        return !todo.completed;
      });
    if (filter === "Completed")
      return todos.filter(function (todo) {
        return todo.completed;
      });
    return todos; // For "All"
  }

  const filteredTodos = getFilteredTodos();

  return (
    <div className="todoapp">
      <h1>TodoMatic</h1>
      <TodoForm addTodo={addTodo} />
      <TodoListFilter setFilter={setFilter} />
      <div className="todo-count">
        <h2>{filteredTodos.length} tasks remaining</h2>
      </div>
      <ul className="todo-list">
        {filteredTodos.map(function (todo) {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
