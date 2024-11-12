import React from "react";
import PropTypes from "prop-types";

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
//& changes the values of filter when clicked button All/Active/Completed

TodoListFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default TodoListFilter;
