import React, {useState}  from 'react';
import './FormTodo.css'

const FormTodo = (props) => {

        const [inputText, setInputText] = useState('');
        
        const OnChangeHandler = (e) => {
            setInputText(e.target.value);
        };

        const SubmitHandler = (e) => {
            e.preventDefault();
            props.onSubmit({
                id:Math.random() * 555784 + 1,
                text: inputText,
                completed: false
            })
            setInputText('');
        };

        return (
            <div className="container">
                <div className="row">
                <form className="todoForm">
                    <input value={inputText} onChange={OnChangeHandler} type="text" placeholder="Enter a new task..." className="todoInput"/>
                    <input onClick={SubmitHandler} type="Submit" className="formBtn" value="Add Task"/>
                </form>
                </div>
                
            </div>
            
        )
};

export default FormTodo