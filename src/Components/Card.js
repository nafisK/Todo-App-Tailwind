import { useState, useEffect, useRef } from "react";
import Todolist from "./Todolist";
import uuid from "react-uuid";

export default function Card() {
  //   const todos = [
  //     { id: 1, name: "To Do 1", complete: true },
  //     { id: 2, name: "To Do 2", complete: false },
  //     { id: 3, name: "To Do 3", complete: false },
  //   ];

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const handleToDo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const toggleToDoDelete = (id) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="w-1/2 text-center rounded p-3 shadow-2xl shadow-gray-500">
          <div className="flex">
            <input
              className="w-full p-1 rounded border border-gray-400 outline-green-500/75 hover:border-gray-800"
              placeholder="What do you want to add?"
              ref={todoNameRef}
            />
            <button
              className="bg-green-500 w-24 rounded p-1 ml-1"
              onClick={handleToDo}
            >
              Add
            </button>
          </div>
          <Todolist
            todos={todos}
            toggleTodo={toggleTodo}
            toggleToDoDelete={toggleToDoDelete}
          />
        </div>
      </div>
    </>
  );
}
