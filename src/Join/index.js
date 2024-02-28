import DryLeafLayer from '../DryLeafLayer';
import {useNavigate} from 'react-router-dom';
import Back_Lay from '../Layout';


export default function Join_room() {
  let navigate = useNavigate();
    return (
      <div class="center-content">
      <h1 class="g-title">Join <span style={{color:'darkred'}}>R</span>oom</h1>
      <br/>
      <DryLeafLayer/>
    <Back_Lay attr={{url:'../game-assets/gg-design/bg3.jpg'}} />
      <form>
          <center>
          <input type="text" maxlength="10" className="gg-txt-box" placeholder="Your name" />
          <br />
          <input type="text" maxlength="5" className="gg-txt-box" placeholder="Room-ID" />
          <br /><br /><input type="button" className="gg-active-btn" onclick="c_sfx();" value="Join Game" />
          <br /><br />
          <span>#Message section(?)</span>
          </center>
            </form>
      <div className='rightFloatBtns'>
        <button className="active-btn fa fa-chevron-left" onClick={()=>navigate(-1)}></button>
                <button className="active-btn" onClick={()=>window.open('/CreateRoom','_self')}>Create room</button>
    </div>
      </div>
    );

}
