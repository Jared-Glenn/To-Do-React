import React from "react";

const Todo = ({ id, item, deleteTodo }) => {
    return (
        <li>
            <span>{ item }</span>
            <button onClick={ deleteTodo } data-testid="todo">X</button>
        </li>
    )
};

export default Todo;