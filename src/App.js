import React from 'react'
import { ToDoCounter } from './ToDoCounter.js';
// import './App.css';

const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro a react.js', completed: false},
  {text: 'Llorar porque no entiendo el curso', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <ToDoCounter/>
        {/* <h2>Has completado 2 de 4 ToDo's</h2> */}
      {/* <TodoSearch/> */}
        <input placeholder="Hola"/>
  
      {/* <TodoList>
        {todos.map(todo => (
          <TodoItem/>
        ))}
      </TodoList> */}
  
      {/* <CreateTodoButton/> */}
      <button>+</button>
    </React.Fragment>
  )}

export default App;
