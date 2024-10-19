import logo from './logo.svg';
import './App.css';
import NumGrid from './sections/numGrid/NumGrid';
import BottomBar from './sections/operatorPad/BottomBar';
import Display from './sections/display/Display';

function App() {
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
      <NumGrid/>
      <BottomBar/>
      <Display/>
    </div>
  );
}

export default App;
