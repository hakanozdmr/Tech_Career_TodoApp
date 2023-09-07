import axios from "axios";
const API_URL = 'http://localhost:5000/api/todo';

export default class TodoService  {
   getUsers(){
    return axios.get(API_URL )
  }
  getTodos(){
    return axios.get("http://localhost:5000/api/todo")
  }
  addTodo(todo){
    return axios.post("http://localhost:5000/api/todo/",todo)
  }
}