import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, onRemove }) => (
  <ul>
    {todos.map((todo) => {
      return (
        <li key={todo.id}>
          <button
            onClick={() => onRemove(todo.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            &#10006;
          </button>
          &nbsp;
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
