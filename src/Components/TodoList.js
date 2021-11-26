import Todo from "./Todo"


function TodoList ({ todos, setTodos, checkTodo, handleInput, removeItem}) {

    return (
        <form className = "todoList">
            <h1 className = "title">Todo List</h1>
            
            {todos.map((todo) => (
                
                <Todo setTodos = {setTodos} 
                todos = {todos} 
                removeItem = {removeItem}
                checkTodo = {checkTodo} 
                todo = {todo}
                key = {todo.id} 
                
                 />
                
            ))}

            




        </form>
    );
};

export default TodoList