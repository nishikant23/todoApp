import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList(props) {
    let {todos} = props; //destruct the new entered todo
    return (
        <ul className='main'> 
            {todos.map((todo, todoIndex) => { //map--print each todo out of todo-list 1by1
                return (
                   <TodoCard {...props} key={todoIndex} index={todoIndex}> {/*todoIndex gives each todo unique index/identifier*/}
                      <p>{todo}</p> {/*pass whole todo list to output */}
                   </TodoCard>
                )
            })}
        </ul>
    )
}