import React, { useState, createContext } from "react";
import TodoForm from "./TodoForm";
import TodoListFilter from "./TodoListFilter";
import Todo from "./Todo";
import "../App.css";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build a Todo App", completed: false },
  ]); //& State to store todos
  const [filter, setFilter] = useState("All"); //& State to store current filter. Calling setFilter("All") (or any other value) will update the filter state variable with the new value.

  function addTodo(task) {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos((prevTodos) => prevTodos.concat(newTodo)); //& concat is to merge arrays (prevTodos+newTodo)
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }; //& returns the object with the completed field changed
        } else {
          return todo;
        }
      })
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); //& filters the array and only returns array
  }

  function editTodo(id, newTask) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return Object.assign(todo, { task: newTask }); //& copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object
        } else {
          return todo;
        }
      })
    );
  }

  function getFilteredTodos() {
    if (filter === "Active") {
      return todos.filter((todo) => !todo.completed); //& filters array and returns only not completed
    } else if (filter === "Completed") {
      return todos.filter((todo) => todo.completed); //& filters array and returns only completed
    } else {
      return todos; //& For "All"
    }
  }

  const filteredTodos = getFilteredTodos();

  const todoContextValue = {
    todos,
    toggleTodo,
    editTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      <div className="todoapp">
        <h1>TodoMatic 2.0</h1>
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
    </TodoContext.Provider>
  );
}

export default App;
