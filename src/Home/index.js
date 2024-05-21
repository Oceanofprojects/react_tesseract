import './Home.css';
import DryLeafLayer from '../DryLeafLayer.js';
import Aud_brd_ from '../game-assets/audio/Aud.js';
import Pre_init from '../Pre.js';


export default function Home() {
  localStorage.setItem("_rid",null);
              localStorage.setItem("plc",null);
              localStorage.setItem("st",null);
              localStorage.setItem('ch_plc',null);
  return (
    <div className="center-content">
    <Aud_brd_/>
      <h1 className="g-title">Raja&nbsp;<b style={{color:'red'}}>&hearts;</b>&nbsp;Rani</h1>
    <DryLeafLayer/>
        <h6 style={{textAlign:'center',padding:'20px 0px',color:'#fff'}}>New multiplayer. V.0.11</h6>
        <center>
        <button className="gg-btn gg-active-btn" onClick={()=>{Pre_init({'action':{'open_nxt':'/CreateRoom'}})}}>Create room</button>
        &nbsp;&nbsp;&nbsp;
        <button className="gg-btn gg-active-btn" onClick={()=>{Pre_init({'action':{'open_nxt':'/JoinRoom'}})}}>Join room</button>
        </center>
        <div className='rightFloatBtns'>
          <button className="active-btn fa fa-user" onClick={()=>{Pre_init({'action':{'open_nxt':'/Characters'}})}}></button>
      </div>
    </div>
  );
}
