import React, { useState } from 'react'
import './Todo.css';

export default function TodoList() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const textStyle = isChecked ? { color: 'red', textDecoration: 'line-through' } : {};

  return (
    <div className='container mt-3'>
        <h1>Todo List</h1>
        <div class="d-flex justify-content-between">
            <button class="btn btn-turk w-25" type="button">All</button>
            <button class="btn btn-turk w-25" type="button">Done</button>
            <button class="btn btn-turk w-25" type="button">Todo</button>
        </div>
        <div className="card mt-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <p style={textStyle} className="m-0">contentaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <div>
                <input className='mx-3' type="checkbox" value="" 
                id="flexCheckDefault"
                checked={isChecked}
                onChange={handleCheckboxChange} />
                <a href='#' className='mx-3'><i className="fa-solid fa-pen"></i></a>
                <a href='#'className='mx-3' ><i className="fa-solid fa-trash"></i></a>
            </div>
          </div>

        </div>
        <div class="d-flex justify-content-evenly">
            <button class="btn btn-delete w-50 m-3" type="button">Delete done tasks</button>
            <button class="btn btn-delete w-50 m-3" type="button">Delete all tasks</button>
        </div>
    </div>
  )
}
