import dispatcher from "../appDispatcher";
import * as todoApi from "../api/todoApi";
import actionTypes from "./actionTypes";

export function saveTodo(todo) {
  return todoApi.saveTodo(todo).then((saveTodo) => {
    dispatcher.dispatch({
      actionType: todo.id ? actionTypes.UPDATE_TODO : actionTypes.CREATE_TODO,
      todo: saveTodo,
    });
  });
}

export function loadTodos() {
  return todoApi.getTodos().then((todos) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_TODOS,
      todos,
    });
  });
}

export function deleteTodo(id) {
  return todoApi.deleteTodo(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_TODO,
      id: id,
    });
  });
}
