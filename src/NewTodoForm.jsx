import React, { useState } from "react";

const NewTodoForm= (props) => {
    const INITIAL_STATE = {
        key: '',
        item: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo({ ...formData });
        setFormData(INITIAL_STATE)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="item">Item: </label>
            <input
                id="item"
                type="text"
                name="item"
                placeholder="Item Name"
                value={formData.item}
                onChange={handleChange}
            />
            <button>Add To Do Item</button>
        </form>
    )
}

export default NewTodoForm;