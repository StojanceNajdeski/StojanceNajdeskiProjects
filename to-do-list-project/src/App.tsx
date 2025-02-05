import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodosList from "./components/TodosList";
import { Todo } from "./todo";

function App() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  return (
    <div className="container">
      <div className="appWrapper">
        <TodoHeader />
      </div>
      <div className="todoForm">
        <TodoForm
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodosList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
}

export default App;
