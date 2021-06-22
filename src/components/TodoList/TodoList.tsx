
  
import React from "react";
import classes from "./todoList.module.css";
import Todo from "../Todo/Todo";
import { TodoType } from "../../types/types";

interface TodoListPropsType {
  todos: TodoType[];
  changeClass: (arg:any, arg2:any) => void;
  removeTodo: (arg:any) => void;
}

const TodoList: React.FC<TodoListPropsType> = ({
  todos,
  changeClass,
  removeTodo,
}) => {
  return (
    <div className={classes.todoContainer}>
      <ul className={classes.todoList}>
        {todos &&
          todos.map((todo, index) => (
            <Todo
              key={index}
              changeClass={changeClass}
              removeTodo={removeTodo}
              todo={todo}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;