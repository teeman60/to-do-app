import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js'
import TodoList from './components/TodoList.js'

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>TeeWhy's To-Do List</h1>
        <Form />
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
