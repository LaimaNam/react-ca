import './App.css';
import ClassDiv from './components/ClassDiv';
import FuncDiv from './components/FuncDiv';

function App() {
  return (
    <div className="App">
      <h1>Task 1</h1>
      <FuncDiv
        contentH3="Function Div"
        contentP="This is FuncDiv p tag content"
      />
      <ClassDiv
        contentH3="Class Div"
        contentP="This is ClassDiv p tag content"
      />
    </div>
  );
}

export default App;
