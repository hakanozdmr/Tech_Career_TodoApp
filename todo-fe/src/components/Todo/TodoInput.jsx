import React, { useState } from 'react'
import './Todo.css';
import TodoService from '../../services/TodoService';
import { useNavigate } from 'react-router-dom';
export default function TodoInput() {
  const [todo, setTodo] = useState('');

  let todoService = new TodoService();
  const navigate = useNavigate()
  const addTodo = () => {
    if (todo.trim() !== '') { 
      todoService.addTodo({ content: todo }) 
        .then((response) => {
          navigate(0)
        })
    }
  };
  return (
    <div className='container' >
        <h1>TodoInput</h1>
        <div className="card">
        <div className="card-body">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-book"></i></span>
                <input
              type="text"
              className="form-control"
              placeholder="New todo"
              aria-label="New todo"
              aria-describedby="basic-addon1"
              value={todo} 
              onChange={(e) => setTodo(e.target.value)}
            />
            </div>
            <div className="d-grid gap-2 ">
                    <button className="btn btn-turk w-100" type="button" onClick={addTodo}>Add new task</button>
            </div>
        </div>
           
        </div>
    </div>
  )
}
