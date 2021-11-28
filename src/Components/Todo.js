import {useState} from "react"
import TodoForm from "./TodoForm"
function Todo({setTodos, todos, checkTodo, todo, handleSubmit, reviseTodo}){

    const [edit, setEdit] = useState({
        id: null,
        title: "",
        userId: 1,
        completed: false
    })

    const done = {
        fontStyle: "normal",
        textDecoration: "line-through"
    }
    const show = {
        display: 'block',
        width: '50px',
        height: '20px'
    }

    const removeItem = (event) => {
        event.preventDefault();
        const todoIndex = todos.findIndex((task) => task.id === todo.id)
        const updatedTodos = [...todos];

        const updatedTodo = updatedTodos[todoIndex];
        updatedTodo[todoIndex] = updatedTodos
        setTodos(updatedTodos.filter((index) => index.id !== todo.id)); 
        console.log(updatedTodos)
        console.log(todo)
    }



    const editItem = (title) => {

        reviseTodo(edit.id, title)
        

        const todoIndex = todos.findIndex((task) => task.id === todo.id)
        const updatedTodos = [...todos];

        const updatedTodo = updatedTodos[todoIndex];
        updatedTodo[todoIndex] = updatedTodos
        setTodos(updatedTodos);
        console.log("hello")
        
    }



    if(edit.id){
        return <TodoForm edit = {edit} onClick = {editItem} />
    }

    return (
    <div>
    
        <div className = "todoItems">
            <input type = "checkbox" checked = {todo.completed} onChange = {() => checkTodo(todo)} />
            <p className = "task" style = {todo.completed ? done: null}>{todo.title}</p>
            <button
            style = {todo.completed ? show: {display: 'none'}}
            onClick = {removeItem}
            
            className = "garbage-can"
        
            >
            Delete
            </button>
            <button
            type = "submit"
            style = {todo.completed ? show: {display: 'none'}}
            onClick = {() => setEdit(
                {id: todo.id, 
                 title: todo.title, 
                 userId: todo.userId, 
                 completed: todo.compelted})}
            
            
            className = "garbage-can"
        
            >
            Edit
            </button>
                
         </div>
   
    </div>
    )
}

export default Todo