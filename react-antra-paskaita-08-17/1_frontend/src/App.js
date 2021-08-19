import ClassCounter from './components/Class/ClassCounter';
import ClassTodos from './components/Class/ClassTodos';
import Greeting from './components/Function/Greeting';

function App() {
  return (
    <div className="App">
      <Greeting name="Laima" surname="Namajunaite" />
      <ClassCounter />
      <ClassTodos />
    </div>
  );
}

export default App;
