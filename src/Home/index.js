import './Home.css';
import DryLeafLayer from '../DryLeafLayer.js';

export default function Home() {
  return (
    <div className="center-content">
    <h1 className="g-title">Raja&nbsp;<b style={{color:'red'}}>&hearts;</b>&nbsp;Rani</h1>
    <DryLeafLayer/>
        <h6 style={{textAlign:'center',padding:'20px 0px',color:'#fff'}}>New multiplayer. V.0.11</h6>
        <center>
        <button className="gg-btn gg-active-btn" onClick={()=>window.open('/CreateRoom','_self')}>Create room</button>
        &nbsp;&nbsp;&nbsp;
        <button className="gg-btn gg-active-btn" onClick={()=>window.open('/JoinRoom','_self')}>Join room</button>
        </center>
        <div className='rightFloatBtns'>
          <button className="active-btn fa fa-user" onClick={()=>window.open('/Characters','_self')}></button>
      </div>
    </div>
  );
}
