import $ from 'jquery';
import DryLeafLayer from '../DryLeafLayer';
import {useNavigate} from 'react-router-dom';
import './Create_room.css';


export default function Create_Room() {
  let navigate = useNavigate();
    return (
      <div class="center-content">
      <h1 class="g-title">Create <span style={{color:'darkred'}}>R</span>oom</h1>
      <br/>
      <DryLeafLayer/>
      <form>
      <center>
        <input type="text" maxlength="10" id="player_name" className="gg-txt-box" placeholder="Your name" autocomplete="off"/>
        <br/>
        <input type="button"  id="cr-btn" className="gg-btn gg-active-btn" onClick={()=>Jx_Create_Room()} value="Start Game"/>
        <br/><br/>
        <span id="_msg"></span>

        </center>
      </form>
      <div className='rightFloatBtns'>
        <button className="active-btn fa fa-chevron-left" onClick={()=>navigate(-1)}></button>
                <button className="active-btn" onClick={()=>window.open('/JoinRoom','_self')}>Join room</button>
    </div>
      </div>
    );


    function Jx_Create_Room() {
      let _msg = document.getElementById('_msg');
      let player_name = document.getElementById("player_name");
      if(player_name.value.trim().length == 0){
        _msg.innerText="Please enter name !";
        _msg.style.color="tomato";
        return false;

      }
      player_name.disabled=true;
      $('#cr-btn').prop({'class':'gg-btn gg-in-active-btn'}).val("Creating room..");
      let data = "module=add_player&action=create&name="+player_name.value;
      const response = fetch("http://localhost/raja-rani/api/index.php", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: data
      })
        .then(async (res) => {
          player_name.disabled=false;
          $('#cr-btn').prop({'class':'gg-btn gg-active-btn'}).val("Start Game");
          data = await res.json();
          if(data.flag){
            localStorage.setItem("_rid",btoa(btoa(data.data)));
            localStorage.setItem("plc",data.place);
            localStorage.setItem("st",data.state);
            window.open('/whoiam','_self');
          }else{
            _msg.innerText=data.message;
            _msg.style.color="tomato";
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }



}
