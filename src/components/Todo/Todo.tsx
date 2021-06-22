import React from "react";
import classes from "./todo.module.css";
import { FaTrash, FaCheck } from "react-icons/fa";
import { TodoType } from "../../types/types";

interface TodoPropsType {
  todo: TodoType;
  changeClass: (arg:any, arg2:any) => void;
  removeTodo: (arg:any) => void;
}

const Todo: React.FC<TodoPropsType> = ({ todo, changeClass, removeTodo }) => {
  return (
    <div className={todo["completed"] ? classes.todoCompleted : classes.todo}>
      <li className={classes.todoItem}>{todo["title"]}</li>
      <button
        className={classes.completeBtn}
        onClick={() => {
          changeClass(todo, !todo["completed"]);
        }}
      >
        <span className={classes.faCheck}>
          <FaCheck />
        </span>
      </button>
      <button
        className={classes.trashBtn}
        onClick={() => {
          removeTodo(todo);
        }}
      >
        <span className={classes.faTrash}>
          <FaTrash />
        </span>
      </button>
    </div>
  );
};

export default Todo;