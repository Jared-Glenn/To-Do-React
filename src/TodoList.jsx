import React, { useState } from "react";
import Todo from "./Todo.jsx";
import NewTodoForm from "./NewTodoForm.jsx";
import { v4 as uuid } from 'uuid';

const TodoList = () => {
    const { currentTodoList, setCurrentTodoList } = useState(null);

    const addTodo = ({ id, item }) => {
        const newTodo = { id: uuid(), item: item };
        setCurrentTodoList(currentTodoList => [...currentTodoList, newTodo]);
    };
    
    const deleteTodo = (key) => {
            const removedTodoIndex = currentTodoList.findIndex(x => x.id === id);
            currentTodoList.splice(removedTodoIndex, 1);
            setBoxList(boxList => [...boxList]);
        }

    return (
        <div>
            <h2>What To Do Today:</h2>
            <NewTodoForm
                addTodo={addTodo}/>
                <ul>
                {currentTodoList.map((todo) => (
                <Todo
                    id={todo.id}
                    item={todo.item}
                    deleteTodo={() => deleteTodo(todo.id)}
                    />
                ))}
                </ul>
        </div>
    )
};

export default TodoList;