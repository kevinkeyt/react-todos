import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

import todoStore from "../../stores/todoStore";
import { loadTodos, deleteTodo, saveTodo } from "../../actions/todoActions";

const TodosPage = () => {
  const [_todos, setTodos] = useState(todoStore.getTodos());
  const [todo, setTodo] = useState({
    title: "",
    completed: false,
  });
  useEffect(() => {
    todoStore.addChangeListener(onChange);
    if (todoStore.getTodos().length === 0) loadTodos();
    return () => todoStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setTodos(todoStore.getTodos());
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveTodo(todo);
    setTodo({
      title: "",
      completed: false,
    });
  }

  function handleRemove(id) {
    deleteTodo(id);
  }

  function handleCompleted(todo) {
    todo.completed = !todo.completed;
    saveTodo(todo);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTodo((todo) => ({
      ...todo,
      [name]: value,
    }));
  }

  return (
    <div>
      <AddTodo todo={todo} onSave={handleSubmit} onChange={handleChange} />
      <TodoList
        todos={_todos}
        onRemove={handleRemove}
        onCompleted={handleCompleted}
      />
    </div>
  );
};

export default TodosPage;
