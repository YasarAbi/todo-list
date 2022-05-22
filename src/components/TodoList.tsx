import React from "react";
import { Todo } from "../models/model";
import "./styles.css"

interface props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
    return <div className="todos">
        {
            todos.map(todo => (
                <li>{todo.todo}</li>
            ))
        }
    </div>;
};

export default TodoList;