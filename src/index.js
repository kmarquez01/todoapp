import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import reportWebVitals from './reportWebVitals';
import { TodoProvider } from './Components/TodoContext';




ReactDOM.render(
  <TodoProvider>
    <TodoApp />
  </TodoProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
