import { FC, useContext } from "react";

import classes from "./Todos.module.css";
import { TodosContext } from "../../context/todos-context";

import TodoElement from "../TodoItem/TodoItem";

const Todos: FC = () => {
  const { items, removeTodo } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.length === 0 && (
        <p className={classes["not-found"]}>No todos found.</p>
      )}

      {items.map((item) => (
        <TodoElement
          key={item.id}
          text={item.text}
          onRemoveTodo={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
