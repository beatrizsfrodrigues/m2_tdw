import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  function handleInput(e) {
    setTask(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask(""); //& Clear input field
    }
  }

  return (
    <form className="form-group" onSubmit={handleFormSubmit}>
      <h2 className="label__lg">What needs to be done?</h2>
      <input
        className="input__lg"
        type="text"
        value={task} //& to be able to empty input
        onChange={handleInput} //& to be able to write on input
      />
      <button className="btn btn__primary btn__lg" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
