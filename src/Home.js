import './Home.css';
import DryLeafLayer from './DryLeafLayer.js';


function Home() {
  let hand = event =>{
    console.log(event.currentTarget);
  }
  return (
    <div className="center-content">
    <h1 className="g-title">Raja&nbsp;<b style={{color:'red'}}>&hearts;</b>&nbsp;Rani</h1>
    <DryLeafLayer/>
        <h6 style={{textAlign:'right',padding:'20px 0px'}}>New multiplayer. V.0.11</h6>
        <center>
        <button className="active-btn" onClick={()=>window.open('/CreateRoom','_self')}>Create room</button>
        <button className="active-btn" onClick={()=>window.open('/JoinRoom','_self')}>Join room</button>
        </center>
        <div className='rightFloatBtns'>
          <button className="active-btn fa fa-user" onclick="c_sfx();window.open('character.php','_self')"></button>
      </div>
    </div>
  );
}


export default Home;
