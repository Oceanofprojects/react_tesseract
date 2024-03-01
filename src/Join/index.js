import DryLeafLayer from '../DryLeafLayer';
import {useNavigate} from 'react-router-dom';


export default function Join_room() {
  let navigate = useNavigate();
    return (
      <div className="center-content">
      <h1 className="g-title">Join <span style={{color:'darkred'}}>R</span>oom</h1>
      <br/>
      <DryLeafLayer/>
      <form>
          <center>
          <input type="text" maxlength="10" className="gg-txt-box" placeholder="Your name" />
          <br />
          <input type="text" maxlength="5" className="gg-txt-box" placeholder="Room-ID" />
          <br /><br /><input type="button" className="gg-btn gg-active-btn" onclick="c_sfx();" value="Join Game" />
          <br /><br />
          <span>#Message section(?)</span>
          </center>
            </form>
      <div className='rightFloatBtns'>
        <button className="active-btn fa fa-chevron-left" onClick={()=>navigate(-1)}></button>
                <button className="active-btn fa fa-question" onClick={()=>window.open('/Whoiam','_self')}></button>
                <button className="active-btn" onClick={()=>window.open('/CreateRoom','_self')}>Create room</button>
    </div>
      </div>
    );

}
