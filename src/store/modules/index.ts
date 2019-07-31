import { combineReducers } from "redux";
import { TodoState, todoReducer as todos } from "./todos";

export interface StoreState {
  todos: TodoState;
}

export default combineReducers<StoreState>({
  todos
});
