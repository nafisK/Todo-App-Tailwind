import icon from "../Assets/icons8-trash.svg";

export default function Todo({ todo, toggleTodo, toggleToDoDelete }) {
  const handleCheckMark = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    toggleToDoDelete(todo.id);
  };

  return (
    <label className=" flex justify-between p-1 mt-1">
      {todo.name}
      <div class="flex text-right">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckMark}
          className="p-1 accent-green-500"
        />
        <img
          src={icon}
          onClick={handleDelete}
          className="w-4 ml-1"
          alt="delete"
        />
      </div>
    </label>
  );
}
