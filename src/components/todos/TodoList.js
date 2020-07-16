import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    })}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
