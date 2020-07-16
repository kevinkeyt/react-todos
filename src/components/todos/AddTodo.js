import React from "react";
import PropTypes from "prop-types";

const AddTodo = ({ todo, onSave, onChange }) => {
  return (
    <form onSubmit={onSave}>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        name="title"
        value={todo.title}
        onChange={onChange}
        placeholder="Add Todo"
      />
    </form>
  );
};

AddTodo.propTypes = {
  todo: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddTodo;
