import React from "react";
import TodoListContainer from "./container/TodoListContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      React with TypeScript!
      <TodoListContainer />
    </div>
  );
};

export default App;
