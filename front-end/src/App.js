import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://f-project-node.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Press here to go to the back-end first link
        </a>
        <a
          className="App-link"
          href="http://127.0.0.1:5000/python"
          target="_blank"
          rel="noopener noreferrer"
        >
          or press here to run backend in Python
        </a>
      </header>
    </div>
  );
}

export default App;
