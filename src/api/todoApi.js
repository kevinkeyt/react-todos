import { handleResponse, handleError } from "./apiUtils";
const apiUrl = process.env.REACT_APP_API_SERVER + "/todos/";

export function getTodos() {
  return fetch(apiUrl).then(handleResponse).catch(handleError);
}

export function saveTodo(todo) {
  return fetch(apiUrl + (todo.id || ""), {
    method: todo.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(todo),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteTodo(id) {
  return fetch(apiUrl + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
