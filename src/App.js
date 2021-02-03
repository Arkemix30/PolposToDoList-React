import './App.css';
//Importing Components
import ToDoList from '../src/components/ToDoList/ToDoList'

function App() {

  return (
    <div className="App">
      <header className='title'> Polpo's ToDo List</header>
      <ToDoList/>
    </div>
  );
}

export default App;
