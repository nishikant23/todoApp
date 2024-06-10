import React from 'react';

export default function TodoCard(props) {
    const {children, deleteTodo, index,editTodo } = props; 
    return (
        <div>
            <li className='todoItem' >
            {children} {/*Todo gets printed in o/p as each div/block using card */}
                   <div className='actionsContainer'>
                    <button onClick={() => {
                        editTodo(index)
                    }}><i className="fa-solid fa-pen-to-square"></i></button>
                    <button onClick={() => {
                        deleteTodo(index)
                    }}><i className="fa-solid fa-trash-can"></i></button> 
                    
                   </div>
            </li>
        </div>
    )
}