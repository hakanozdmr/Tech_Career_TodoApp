import axios from "axios";
const API_URL = 'http://localhost:8080/v1/todo';

export default class TodoService  {
  getAllTodos(){
    return axios.get(API_URL)
  }
  getAllTodosIsDoneTrue(){
    return axios.get(API_URL+"/getAllTodosIsDoneTrue")
  }
  getAllTodosIsDoneFalse(){
    return axios.get(API_URL+"/getAllTodosIsDoneFalse")
  }
  addTodo(todo){
    return axios.post(API_URL,todo)
  }
  deleteTodosIsDoneTrue(){
    return axios.delete(API_URL+"/delete/deleteTodoIsDoneTrue")
  }
  deleteTodosAll(){
    return axios.delete(API_URL+"/delete")
  }
  deleteTodoById(id){
    return axios.delete(API_URL+`/delete/${id}`)
  }
  updateTodoContent(id,content){
    return axios.put(API_URL+`/update/${id}/updateContent/?content=${content}`)
  }
  updateTodoIsDone(id){
    return axios.put(API_URL+`/update/updateTodoIsDone/${id}`)
  }
}