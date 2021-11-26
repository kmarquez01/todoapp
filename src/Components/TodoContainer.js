import React from "react"

import {useState, useE} from "react"

import TodoComponent from "./TodoComponent"

import axios from "axios"

class TodoContainer extends React.Component{
    constructor(){
        super();

        this.state = {
           // loading: pause,
           task: [],
           error: "",
           id: 0,
           title: "",
           completed: false
         
           
           
        }



        this.handleInput = this.handleInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users/1/todos")

            .then(response => //console.log(response.data) 
            this.setState({
                task: response.data 
                
            })) 
            
            
    }


  

        /*
        
        const response =  await fetch(url)
        const data = await response.json()

       this.setState({
           task: data.title
       })

        

        console.log(data[0])
        console.log(data)
        */    
   

    addItem(event){

        event.preventDefault();

        let value = event.target.value

        const newTask = {
            id: Math.random(),
            title: value,
            completed: false
        }


        if(newTask.title === ""){
            this.setState({
                error: "Please enter an item"
            })
            return null
        }
    
        if(this.state.task.length === 40){
            this.setState({
                error: "Item limit reached, please delete items."
            })
            return null
        }
        else{
        
            this.setState({
                task: [...this.state.task, newTask],
                error: "",
                title: "",
                

            })
        }
    }

    removeItem(id){



        const filteredItems = this.state.task.filter(item =>
            item.id !== id);
            this.setState({
                task:filteredItems
            })

            

    }

  

    handleInput(event){

        this.setState({
            [event.target.name]: event.target.value
        })

    }
    

    handleChange(id){

        console.log(id)
        

        this.setState(previousState => {
            const newTodos = previousState.task.map(item => {
                if (item.id === id){
                    item.completed = !item.completed
                }
                return item
            })
            return {
                task: newTodos
            }
        })
        

    }


   




    render(){
/*
        const handleChange = (todos) => {
            todos.findIndex((task) => task.id == todo.id)
            const updatedTodos = [...todos];
    
            const updatedTodo = updatedTodos[todoIndex];
            updatedTodo.completed =! updatedTodo.completed;
            updatedTodo[todoIndex] = updatedTodos
            setTodos(updatedTodos); 
            console.log(updatedTodo)
        }
        */

        const tasks = this.state.task.map(item => <TodoComponent key = {item.id} item = {item} handleInput = {this.handleInput} handleChange = {this.handleChange}>
            
           
        </TodoComponent>)

        console.log(tasks)
        

        //console.log(this.state.title)

        return(
            <div className = "todoContainer">
                <ul className = "todoWrapper">
                    <h1>Todo List</h1>
                    {tasks}
                    <div className = "bar">
                        <input type = "text" name = "title" placeholder = "Enter task" value = {this.state.title} onChange = {this.handleInput} />
                        <button type = "submit" defaultValue = "" name = "submit" value = {this.state.title} onClick = {this.addItem}>Add task</button>
                    </div>   
                    <div className = "error">
                        {this.state.error}
                    </div>
                </ul>
            </div>
        )
    }


}

export default TodoContainer