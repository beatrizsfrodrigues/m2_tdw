import React, { useState } from "react";

function Todo({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  function handleEditChange(e) {
    setNewTask(e.target.value); // Update new task text
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    editTodo(todo.id, newTask); // Update todo with new task
    setIsEditing(false); // Exit edit mode
  }

  function toggleEditing() {
    setIsEditing(true); // Enter edit mode
  }

  function handleDelete() {
    deleteTodo(todo.id); // Call delete function with todo ID
  }

  function handleToggle() {
    toggleTodo(todo.id); // Call toggle function with todo ID
  }

  let editingContent;
  if (isEditing) {
    editingContent = (
      <form onSubmit={handleEditSubmit} className="edit-form">
        <input
          type="text"
          value={newTask}
          onChange={handleEditChange}
          className="edit-input"
        />
        <button type="submit" className="btn btn__primary">
          Save
        </button>
      </form>
    );
  } else {
    editingContent = <label className="todoLabel">{todo.task}</label>;
  }

  let editButton;
  if (!isEditing) {
    editButton = (
      <button className="btn" onClick={toggleEditing}>
        Edit
      </button>
    );
  }

  return (
    <li className="todo">
      <div className="c-cb">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        {editingContent}
      </div>
      <div className="btn-group">
        {editButton}
        <button className="btn btn__danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Todo;
