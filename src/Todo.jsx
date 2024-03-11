import React from "react";

const Todo = ({ id, item, deleteTodo }) => {
    return (
        <li>
            <span>{ item }</span>
            <button onClick={ deleteTodo }>X</button>
        </li>
    )
};

export default Todo;