import logo from './logo.svg';
import './App.css';
import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList';

function App() {


  return (
    <div className="App container">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
    </div>
  );
}

export default App;
