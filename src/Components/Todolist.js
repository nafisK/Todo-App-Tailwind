import Todo from "./Todo";

export default function Todolist({ todos, toggleTodo, toggleToDoDelete }) {
  return todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        toggleTodo={toggleTodo}
        toggleToDoDelete={toggleToDoDelete}
      />
    );
  });
}
