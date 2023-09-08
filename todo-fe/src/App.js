import logo from './logo.svg';
import './App.css';
import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Todo from './components/Todo';

function App() {


  return (
    <div className="App container">
       <Router>
          <Routes>
            <Route path='/' element={<Todo />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
