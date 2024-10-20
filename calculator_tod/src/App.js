
import logo from './logo.svg';
import './App.css';
import NumGrid from './sections/numGrid/NumGrid';
import BottomBar from './sections/operatorPad/BottomBar';
import Display from './sections/display/Display';
import InputNum from './sections/core/calcFunctions';


function App() {
  const [num, setNum, operator, setOperator] = InputNum();
  
  return ( 
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <NumGrid onNumClick={setNum} onOperatorClick={setOperator} />
      <BottomBar onNumClick={setNum} onOperatorClick={setOperator}/>
      <Display value={num} operator={operator}/>
    </div>
  );
}

export default App;
