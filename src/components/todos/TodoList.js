import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, onRemove }) => (
  <ul>
    {todos.map((todo) => {
      return (
        <li key={todo.id} className="my-2">
          <svg
            className="w-5 inline cursor-pointer mx-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => onRemove(todo.id)}
          >
            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          {todo.title}
        </li>
      );
    })}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoList;
