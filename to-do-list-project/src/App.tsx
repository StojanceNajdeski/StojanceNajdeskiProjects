import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodosList from "./components/TodosList";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  isEditing: boolean;
}

function App() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); // Specify that todos is an array of Todo objects

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
        />
      </div>
      <div>
        <TodosList todos={todos} setTodos={setTodos} />{" "}
        {/* Pass todos and setTodos as props */}
      </div>
    </div>
  );
}

export default App;
