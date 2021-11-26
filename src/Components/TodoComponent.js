import React from "react"


function TodoComponent(props){
    const done = {
        fontStyle: "normal",
        textDecoration: "line-through"
    }
    return(
        <form className = "todo-component">
            <input 
                type = "checkbox"
                checked = {props.item.completed}
                onChange = {() => props.handleChange(props.item.id)}
               
                
                
                         
            
            />

            <p style = {props.item.completed === true ? done: null} value = {props.item.title} >{props.item.title}</p>
            
            <button 
                className = "delete" 
                type = "submit"
                onClick = {() => props.removeItem(props.item.id)}
                >
                
                Delete</button>
        </form>
    )
}

export default TodoComponent