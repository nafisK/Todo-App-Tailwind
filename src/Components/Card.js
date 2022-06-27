import { useState, useEffect, useRef } from "react";
import Todolist from "./Todolist";
import uuid from "react-uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

export default function Card() {
  const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    : [];

  const [todos, setTodos] = useState(storedTodos);
  const todoNameRef = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // handles
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

  const removeCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    console.log(newTodos);
    setTodos(newTodos);
  };

  const checkAll = () => {};
  const deleteAll = () => {};

  return (
    <>
      <div className="flex h-screen justify-center items-center ">
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
          <div className="flex justify-center">
            <button
              className="bg-green-500 rounded p-1 mt-1"
              onClick={checkAll}
            >
              Check All
            </button>
            <button
              className="bg-green-500 rounded p-1 mt-1 ml-1"
              onClick={removeCompleted}
            >
              Clear Completed
            </button>
            <button
              className="bg-green-500 rounded p-1 mt-1 ml-1"
              onClick={deleteAll}
            >
              Delete All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
