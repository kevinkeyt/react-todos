import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _todos = [];

class TodoStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getTodos() {
    return _todos;
  }
}

const store = new TodoStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.DELETE_TODO:
      _todos = _todos.filter((todo) => todo.id !== parseInt(action.id, 10));
      store.emitChange();
      break;
    case actionTypes.CREATE_TODO:
      _todos.push(action.todo);
      store.emitChange();
      break;
    case actionTypes.UPDATE_TODO:
      _todos = _todos.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );
      store.emitChange();
      break;
    default:
  }
});

export default store;
