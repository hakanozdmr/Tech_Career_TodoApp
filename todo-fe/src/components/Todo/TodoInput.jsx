import React from 'react'
import './Todo.css';
export default function TodoInput() {
  return (
    <div className='container' >
        <h1>TodoInput</h1>
        <div class="card">
        <div class="card-body">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-book"></i></span>
                <input type="text" class="form-control" placeholder="New todo" aria-label="New todo" aria-describedby="basic-addon1"/>
            </div>
            <div class="d-grid gap-2 ">
                    <button class="btn btn-turk w-100" type="button">Add new task</button>
            </div>
        </div>
           
        </div>
    </div>
  )
}
