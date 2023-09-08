import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Todo.css';
import TodoService from '../../services/TodoService';

export default function TodoList() {
  let todoService = new TodoService()
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false);
  const [update, setUpdate] = useState(false);
  const [todos, setTodos] = useState([])
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [editedContent, setEditedContent] = useState('');
  const handleCheckboxChange = (todoId) => {
    setIsChecked(!isChecked);
    todoService.updateTodoIsDone(todoId)
      .then(() => {
        navigate(0);
      })
  };
  const handleUpdateContent = (todoId, content) => {
    todoService.updateTodoContent(todoId, content)
      .then(() => {
        navigate(0);
      })
  };
  const handleSetUpdateTrue = (todoId) => {
    setEditableTodoId(todoId);
  };

  const handleSetUpdateFalse = () => {
    setEditableTodoId(null);
  };
  const handleGetAllTodos = (e) => {
    todoService.getAllTodos().then(result => setTodos(result.data))
  };
  const handleGetAllTodosIsDoneTrue = (e) => {
    todoService.getAllTodosIsDoneTrue().then(result => setTodos(result.data))
  };
  const handleAllTodosIsDoneFalse = (e) => {
    todoService.getAllTodosIsDoneFalse().then(result => setTodos(result.data))
  };
  const handleDeleteById = (e, todoId) => {
    var alert = window.confirm("Todo Silinsin mi ?");
    if (alert === true) {
      const res = todoService.deleteTodoById(todoId)
      navigate(0)
    } else {
      navigate(0)
    }
  };
  const handleDeleteAll = (e) => {
    var alert = window.confirm("Todolar Silinsin mi ?");
    if (alert === true) {
      const res = todoService.deleteTodosAll()
      navigate(0)
    }
  };
  const handleDeleteTodosIsDoneTrue = (e) => {
    var alert = window.confirm("Todolar Silinsin mi ?");
    if (alert === true) {
      const res = todoService.deleteTodosIsDoneTrue()
      navigate(0)
    }
  };

  useEffect(() => {
    todoService.getAllTodos().then(result => setTodos(result.data))
  }, [])
  return (
    <div className='container mt-3'>
      <h1>Todo List</h1>
      <div className="d-flex justify-content-between">
        <button className="btn btn-turk w-25" type="button" onClick={handleGetAllTodos}>All</button>
        <button className="btn btn-turk w-25" type="button" onClick={handleGetAllTodosIsDoneTrue}>Done</button>
        <button className="btn btn-turk w-25" type="button" onClick={handleAllTodosIsDoneFalse}>Todo</button>
      </div>
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <div className="card mt-3" key={todo.id}>
            <div className="card-body d-flex justify-content-between align-items-center">
              {editableTodoId === todo.id ? (
                <div>
                  <input
                    type="text"
                    id={todo.id}
                    value={editedContent}
                    className="m-0 "
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                  <a
                    href="#"
                    className="mx-3"
                    onClick={() => handleUpdateContent(todo.id, editedContent)}
                  >
                    <i className="fa-regular fa-circle-check"></i>
                  </a>
                  <a href="#" className="mx-3" onClick={handleSetUpdateFalse}>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </a>
                </div>
              ) : (
                <input
                  disabled
                  type="text"
                  style={
                    todo.isDone
                      ? { color: 'red', textDecoration: 'line-through' }
                      : {}
                  }
                  value={todo.content}
                  className="m-0 w-75"
                />
              )}
              <div>
                <input
                  className="mx-3"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked={todo.isDone}
                  onChange={() => handleCheckboxChange(todo.id)}
                />
                <a
                  href="#"
                  className="mx-3"
                  onClick={() => handleSetUpdateTrue(todo.id)}
                >
                  <i className="fa-solid fa-pen"></i>
                </a>
                <a
                  href="#"
                  className="mx-3"
                  onClick={(e) => handleDeleteById(e, todo.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="card mt-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <p className="m-0">You don't have any todo here</p>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-evenly">
        <button className="btn btn-delete w-50 m-3" type="button" onClick={handleDeleteTodosIsDoneTrue}>Delete done tasks</button>
        <button className="btn btn-delete w-50 m-3" type="button" onClick={handleDeleteAll} >Delete all tasks</button>
      </div>
    </div>
  )
}
