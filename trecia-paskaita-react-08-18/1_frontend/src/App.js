import './App.css';
import Nav from './ConditionalRendering/Nav';
import Counter1 from './LifeSycleInClassComp/Counter1';
// import Users from './Lists/Users';
// import Greeting from './StateInClassComp/Greeting';

function App() {
  // return <div className="App"></div>;
  return (
    <>
      <header>
        <div id="logo">LOGO</div>
        <Nav /> {/* Conditional rendering */}
      </header>
      <main>
        {/* <Users /> */}
        {/* <Greeting /> */}
        <Counter1 />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
