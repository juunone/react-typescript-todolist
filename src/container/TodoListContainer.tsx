import React from "react";
import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { StoreState } from "../store/modules";
import {
  TodoItemDataParams,
  actionCreators as todosActions
} from "../store/modules/todos";
import { bindActionCreators } from "redux";

interface Props {
  todoItems: TodoItemDataParams[];
  input: string;
  TodosActions: typeof todosActions;
}

class TodoListContainer extends React.Component<Props> {
  onCreate = (): void => {
    const { TodosActions, input } = this.props;
    TodosActions.create(input);
  };
  onRemove = (id: number): void => {
    const { TodosActions } = this.props;
    TodosActions.remove(id);
  };
  onToggle = (id: number): void => {
    const { TodosActions } = this.props;
    TodosActions.toggle(id);
  };
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    const { TodosActions } = this.props;
    TodosActions.changeInput(value);
  };

  render() {
    const { input, todoItems } = this.props;
    const { onCreate, onChange, onRemove, onToggle } = this;
    return (
      <TodoList
        input={input}
        todoItems={todoItems}
        onChange={onChange}
        onCreate={onCreate}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    );
  }
}

export default connect(
  ({ todos }: StoreState) => ({
    input: todos.input,
    todoItems: todos.todoItems
  }),
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoListContainer);
