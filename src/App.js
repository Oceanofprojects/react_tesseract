import logo from './logo.svg';
import './App.css';



function App() {

  function myfun(){
    $.ajax({url: "https://dummyjson.com/products/1",'type':'get', success: function(result){
    document.write(result);
  }});
    
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
  onClick ={myfun}
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
