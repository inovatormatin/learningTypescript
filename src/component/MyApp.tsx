import React, { useState } from "react";
import "./inputFeild.css";
import { TodoTask } from "../Basics";
import UserInput from "./UserInput";
import Task from "./Task";

const MyApp: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoTask[]>([]);

  // to add
  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput) {
      setTodoList([
        ...todoList,
        { id: Date.now().toString(), title: userInput, isDone: false },
      ]);
      setUserInput("");
    }
  };

  // to delete
  // const deleteHandler = () => {};

  // to done
  // const doneHandler = () => {};

  return (
    <div className="todo__container">
      <h2>Todo List</h2>

      {/* user input */}
      <UserInput
        userInput={userInput}
        setUserInput={setUserInput}
        addHandler={addHandler}
      />

      {/* Tasks */}
      {todoList.length > 0 &&
        todoList.map((item, index) => {
          return (
            <Task
              key={index}
              id={item.id}
              title={item.title}
              done={item.isDone}
            />
          );
        })}
    </div>
  );
};

export default MyApp;
