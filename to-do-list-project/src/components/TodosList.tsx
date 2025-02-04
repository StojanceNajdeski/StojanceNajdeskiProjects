import React from "react";
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  isEditing: boolean;
}

interface TodosListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosList: React.FC<TodosListProps> = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li className="todoList" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            onChange={(e) => e.preventDefault()}
            disabled
          />
          <div className="taskButtons">
            <div className="doneTaskBtn">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="editTaskBtn">
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <div className="deleteTaskBtn">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
