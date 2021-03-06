import Todo from "./Todo"

import {useEffect, useState} from "react"

import axios from "axios"



function TodoList ({ todos, setTodos, checkTodo, handleInput, removeItem}) {

    const [hiddenAPI, sethiddenAPI] = useState(true)

 

    const show = {
        display: 'block',
        width: '50px',
        height: '20px'
    }

    const hideAPI = (event) => {
        event.preventDefault();
        todos.length = 0
        sethiddenAPI(false)
        console.log(todos)

        
 
    }

    const revealAPI = (event) => {
        event.preventDefault();
        axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
             .then((result) => {
                setTodos(result.data)
                console.log(result.data)
        });
        sethiddenAPI(true)
        console.log(todos)

    }

    const reviseTodo = (todoId, newValue) => {
        if(!newValue.title){
            return;
        }
       setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }


    return (
        <form className = "todoList">
            <h1 className = "title">Todo List</h1>

            <div className = "buttoncontainer">

            <button className = "showmore" onClick = {hiddenAPI === true ? hideAPI : revealAPI}>Hide/Show API</button>
            </div>
            <div className = "todo-items-container">
            {todos.map((todo) => (
                
                <Todo setTodos = {setTodos} 
                todos = {todos} 
                removeItem = {removeItem}
                checkTodo = {checkTodo} 
                todo = {todo}
                key = {todo.id} 
                reviseTodo = {reviseTodo}
                
                 />
                
            ))}

            </div>




        </form>
    );
};

export default TodoList