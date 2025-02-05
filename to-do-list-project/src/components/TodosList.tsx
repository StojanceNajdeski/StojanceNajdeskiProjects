import React, { useState } from "react";
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  isEditing: boolean;
}

interface TodosListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setEditTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
}

interface ProductProps {
  id: string;
}

const TodosList: React.FC<TodosListProps> = ({
  todos,
  setTodos,
  setEditTodo,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const handleComplete = ({ id }: ProductProps) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEdit = ({ id }: ProductProps) => {
    const findTodo = todos.find((todo) => todo.id === id) || null;
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }: ProductProps) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="todoList" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`task ${todo.completed ? "complete" : ""} `}
            onChange={(e) => e.preventDefault()}
            disabled
          />
          <div className="taskButtons">
            <div
              className={"doneTaskBtn " + (isCompleted ? "overline" : "")}
              onClick={() => setIsCompleted(!isCompleted)}
            >
              <i
                className="fa-solid fa-check"
                onClick={() => handleComplete(todo)}
              ></i>
            </div>
            <div className="editTaskBtn">
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => handleEdit(todo)}
              ></i>
            </div>
            <div className="deleteTaskBtn">
              <i
                className="fa-solid fa-trash"
                onClick={() => handleDelete(todo)}
              ></i>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
