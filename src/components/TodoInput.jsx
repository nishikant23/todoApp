import React, { useState } from 'react';

export default function TodoInput(props) {
    const {addTodo, newInput, setNewInput} = props   //addTodo fumction gets destructure here
    
    return (
        <header>
            <input value={newInput} onChange={(e) => {
                setNewInput(e.target.value); //input-entered data gets updated 
            }} type="text" placeholder='Enter todo...' />

            <button onClick={() => {
                addTodo(newInput) //newInput passed as Arg to addTodo-fn in App.jsx file
                setNewInput('') //after each typed & input field gets cleared
            }}>Add Todo</button>     
        </header>
    )
    
    
}