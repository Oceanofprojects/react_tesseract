import logo from './logo.svg';
import './App.css';



function App() {

  function Myfun(){
  alert(9050)
}
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hi, Team :
        </p>
        <a
  onclick ={Myfun}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ~ We ready to launch tesseract
        </a>
      </header>
    </div>
  );
}

export default App;
