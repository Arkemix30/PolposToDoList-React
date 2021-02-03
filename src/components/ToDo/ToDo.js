import React from 'react';
import './ToDo.css'
const Todo = ({ todos, completeTodo, removeTodo }) => {
    return todos.map((todo, index,) => (
        <div className="todo container">
            <div className="row justify-content-center">
                <div className="col-10">
                    <li className={todo.completed ? 'list-group-item completed' : 'list-group-item'} key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</li>
                </div>
                <div className="col-auto">
                    <button id='deleteBtn' onClick={() => removeTodo(todo.id)} className="btn btn-danger"><i class="fas fa-trash"></i></button>
                </div>
                
            </div>
        </div>
        
    ));
};

export default Todo;