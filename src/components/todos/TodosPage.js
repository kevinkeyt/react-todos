import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

import * as todoApi from "../../api/todoApi";
import AddTodo from "./AddTodo";

const TodosPage = () => {
  const [_todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    completed: false,
  });
  useEffect(() => {
    todoApi.getTodos().then((todos) => {
      setTodos(todos);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    todoApi.saveTodo(todo).then((todo) => {
      _todos.push(todo);
      setTodos([..._todos]);
      setTodo({
        title: "",
        completed: false,
      });
    });
  }

  function handleRemove(id) {
    todoApi.deleteTodo(id).then((_) => {
      const items = _todos.filter((x) => x.id !== id);
      setTodos([...items]);
    });
  }

  function handleCompleted(todo) {
    todo.completed = !todo.completed;
    todoApi.saveTodo(todo).then((todo) => {
      const items = _todos.map((x) => (x.id === todo.id ? todo : x));
      setTodos([...items]);
    });
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
