import { useReducer, useState } from "react";

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: 1, text: "Học React", completed: false },
    { id: 2, text: "Làm bài tập", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: "ADD_TODO", text: newTodo });
      setNewTodo("");
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Danh sách công việc</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Thêm công việc mới..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTodo();
          }}
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button onClick={handleAddTodo} className="">
          Thêm
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between rounded-md border p-3"
          >
            <div className="flex items-center space-x-2">
              <input
                id={`todo-${todo.id}`}
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor={`todo-${todo.id}`}
                className={`${todo.completed ? "text-gray-500 line-through" : ""}`}
              >
                {todo.text}
              </label>
            </div>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}
              className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-red-500"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      <div className="text-sm text-gray-500">
        Tổng số: {todos.length} công việc, Hoàn thành:{" "}
        {todos.filter((t) => t.completed).length}
      </div>
    </div>
  );
};
export default TodoList;
