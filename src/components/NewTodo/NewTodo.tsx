import { useContext, useRef } from "react";

import classes from "./NewTodo.module.css";
import { TodosContext } from "../../context/todos-context";

const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    addTodo(enteredText);

    todoInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo-text">Todo text</label>
      <input type="text" id="todo-text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
