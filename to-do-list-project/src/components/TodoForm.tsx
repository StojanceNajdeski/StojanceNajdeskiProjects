import { v4 as uuidv4 } from "uuid";

interface TodoFormProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  isEditing: boolean;
}

const TodoForm: React.FC<TodoFormProps> = ({
  input,
  setInput,
  todos,
  setTodos,
}) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      const newTodo: Todo = {
        id: uuidv4(),
        completed: false,
        title: input,
        isEditing: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInput("");
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
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
