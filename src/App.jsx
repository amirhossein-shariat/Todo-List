import { useState } from 'react'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const deleteTodo=(todoName)=>{
    const newTodoList = todoList.filter((todo)=>{
      return(
        todo !== todoName
      )
    })
    setTodoList(newTodoList)
  }

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input type="text" placeholder='Enter Your Todo' onChange={(event)=>setNewTodo(event.target.value)} />
        <button onClick={()=>setTodoList([...todoList , newTodo])}>Add Todo</button>
      </div>
      <div>
        {todoList.map((todo)=>{
        return(
          <div>
            <p>{todo}</p>
            <button onClick={()=>deleteTodo(todo)}>delete</button>
          </div>
        )})}
      </div>
    </>
  )
}

export default App

