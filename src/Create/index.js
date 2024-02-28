import DryLeafLayer from '../DryLeafLayer';
import Back_Lay from '../Layout';
import {useNavigate} from 'react-router-dom';
import './Create_room.css';


export default function Create_Room() {
  let navigate = useNavigate();
    return (
      <div class="center-content">
      <h1 class="g-title">Create <span style={{color:'darkred'}}>R</span>oom</h1>
      <br/>
      <DryLeafLayer/>
          <Back_Lay attr={{url:'../game-assets/gg-design/bg2.jpg'}} />
      <form>
      <center>
        <input type="text" maxlength="10" className="gg-txt-box" placeholder="Your name"/>
        <br/>
        <input type="button" class="gg-active-btn" onclick="c_sfx();" value="Start Game"/>
        <br/><br/>
        <span>#Message section(?)</span>

        </center>
      </form>
      <div className='rightFloatBtns'>
        <button className="active-btn fa fa-chevron-left" onClick={()=>navigate(-1)}></button>
                <button className="active-btn" onClick={()=>window.open('/JoinRoom','_self')}>Join room</button>
    </div>
      </div>
    );

}
