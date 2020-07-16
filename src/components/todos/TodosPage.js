import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

import * as todoApi from "../../api/todoApi";

const TodosPage = () => {
  const [_courses, setCourses] = useState([]);

  useEffect(() => {
    todoApi.getTodos().then((courses) => {
      setCourses(courses);
    });
  }, []);

  return (
    <div>
      <h2>You&apos;ve got some stuff to do! :)</h2>
      <TodoList todos={_courses} />
    </div>
  );
};

export default TodosPage;
