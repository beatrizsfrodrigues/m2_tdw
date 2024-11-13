import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  padding: 0.25em 1em;
  cursor: pointer;

  ${({ $primary }) =>
    $primary &&
    css`
      background: #bf4f74;
      color: white;
    `};
`;

function Todo({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  function handleEditChange(e) {
    setNewTask(e.target.value); //& Update new task text
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    editTodo(todo.id, newTask); //& Update todo with new task
    setIsEditing(false); //& Exit edit mode
  }

  function toggleEditing() {
    setIsEditing(true); //& Enter edit mode
  }

  function handleDelete() {
    deleteTodo(todo.id); //& Call delete function with todo ID
  }

  function handleToggle() {
    toggleTodo(todo.id); //& Call toggle function with todo ID
  }

  //* function to change label/input for when its in edit move vs not
  let editingContent;
  if (isEditing) {
    editingContent = (
      <form onSubmit={handleEditSubmit} className="edit-form">
        <input
          type="text"
          value={newTask}
          onChange={handleEditChange}
          className="input__lg"
        />
        <Button $primary type="submit" className="btn btn__primary">
          Save
        </Button>
      </form>
    );
  } else {
    editingContent = <label className="todoLabel">{todo.task}</label>;
  }

  //* function to appear/disappear the edit button
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

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default Todo;
