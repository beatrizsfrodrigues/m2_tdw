import React from "react";

function TodoListFilter({ setFilter }) {
  return (
    <div className="btn-group filters stack-exception">
      <button className="btn toggle-btn" onClick={() => setFilter("All")}>
        All
      </button>
      <button className="btn toggle-btn" onClick={() => setFilter("Active")}>
        Active
      </button>
      <button className="btn toggle-btn" onClick={() => setFilter("Completed")}>
        Completed
      </button>
    </div>
  );
}

export default TodoListFilter;
