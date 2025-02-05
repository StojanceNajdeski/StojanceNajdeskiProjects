import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { Todo, TodoFormProps } from "../todo";

const TodoForm: React.FC<TodoFormProps> = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    e.preventDefault();
  };

  const updateTodo = (updatedTodo: Todo) => {
    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(newTodos);
    setEditTodo(null);
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]); // ✅ Correct syntax

  const onFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editTodo) {
      if (input.trim()) {
        const updatedTodo: Todo = {
          ...editTodo,
          title: input,
        };
        updateTodo(updatedTodo);
        setInput("");
      }
    } else {
      if (input.trim()) {
        const newTodo: Todo = {
          id: uuidv4(),
          title: input,
          completed: false,
          isEditing: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setInput("");
      }
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter your task..."
        className="taskInput"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="addTaskBtn" type="submit">
        {editTodo ? "OK" : "Add Task"}
      </button>
    </form>
  );
};

export default TodoForm;
