import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

   const [todos, setTodos] = useState([]) //todos--hold each entered todo in input field
   const [newInput, setNewInput] = useState('') //pass newEdited todo only to current todoList 

   function retainData(newStorageTodo) {
    localStorage.setItem('todos', JSON.stringify({todos: newStorageTodo}))
   }
 
   function addTodo(newTodo) { //Adds each new todo to list
    const newList = [...todos, newTodo];  //add new todo after existing-todos(...todos)
    retainData(newList);
    setTodos(newList); //set each new-todo to todos-variable 
   }

   function deleteTodo(index) {  //Delete todo from list
    const newList = todos.filter((todo, todoIndex) => {
      return index != todoIndex  //print only those todo-which != todo(has identifer != 'index')
    })
    retainData(newList);
    setTodos(newList);
   }

   function editTodo(index) { //todo to edit--pass again it to inputbox & add req. things and add again
    const editedTodo = todos[index];  //select that todo which we clicked to edit as per index refrence
    //retainData(editedTodo);
    setNewInput(editedTodo);  //sets todolist with new edited-Todo
    deleteTodo(index); //at very first delete that currect todo selct for editing from list/screen
   } 

   useEffect(() => {
   
    if(!localStorage) return;
    let localTodos = localStorage.getItem('todos');
    
    if(!localTodos) return;
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos)
   }, [])

  return (
    <> 
      {/*newInp,setNewInp passed to make connection b/w TodoInpy & TodoList, Why? --editTodo goes to (TL)TodoList*/}
      {/*TL pass index of editing-todo & then that specific-todo only pass to TInp as newSt-var & in inp-box*/}
      <TodoInput addTodo={addTodo} newInput={newInput} setNewInput={setNewInput} /> {/*//passed fun-addTodo as prop to -- TodoInput*/}
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/> {/*//pass todos-arraylist as prop to -- TodoList*/}
    </>
  )
}

export default App
