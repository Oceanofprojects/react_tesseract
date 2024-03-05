import logo from './logo.svg';
import './App.css';



function App() {
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hi, Team :
        </p>
        <a
  onClick ={myfun}
          className="App-link"
          href="raja-rani"
          target="_self"
          rel="noopener noreferrer"
        >
          ~ We ready to launch tesseract
        </a>
      </header>
    </div>
  );
}

// async function myfun(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     console.log(users) 
// }

export default App;
