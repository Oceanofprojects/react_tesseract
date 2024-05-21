import $ from 'jquery';
import DryLeafLayer from '../DryLeafLayer';
import {useNavigate} from 'react-router-dom';
import API_ENV from '../Api/RR_ENV.json';
import Aud_brd_ from '../game-assets/audio/Aud.js';
import Pre_init from '../Pre.js';


export default function Join_room() {
  let navigate = useNavigate();
    return (
      <div className="center-content">
      <h1 className="g-title">Join Room</h1>
      <Aud_brd_/>
      <br/>
      <DryLeafLayer/>
      <form>
          <center>
          <input type="text" maxlength="10" className="gg-txt-box" id="name" placeholder="Your name" />
          <br />
          <input type="text" maxlength="5" className="gg-txt-box"  id="roomid" placeholder="Room-ID" />
          <br /><br /><input id="jbn" type="button" className=" gg-btn gg-active-btn" onClick={()=>{Pre_init();Join(this)}} value="Join Room" />
          <br /><br />
          <span id="msg" style={{color:'tomato'}}></span>
          </center>
            </form>
      <div className='rightFloatBtns'>
          <button className="active-btn fa fa-chevron-left" onClick={()=>{Pre_init();navigate(-1)}}></button>
          <button className="active-btn" onClick={()=>{Pre_init({'action':{'open_nxt':'/CreateRoom'}})}}>Create room</button>
    </div>
      </div>
    );

}
const Join =(event)=>{
 let ele = $('#jbn');
  if($('#name,#roomid').val().trim().length<=0){
    $('#msg').text("Please enter player name & room-ID");
    return;
  }else if($('#roomid').val().trim().length<=0){
    $('#msg').text("Please enter room ID");
    return;
  }else if($('#name').val().trim().length<=0){
    $('#msg').text("Please enter player name");
    return;
  }
  ele.removeAttr('class');
  ele.attr('class','gg-btn gg-in-active-btn').text('Joining room ..');
    let data = "module=add_player&action=join&name="+$('#name').val()+"&roomid="+$('#roomid').val();
    const response = fetch(API_ENV.ENV.USE_ENV.URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: data
    }).then(async (res) => {
        data = await res.json();
            if(!data.flag){
            ele.removeAttr('class');
            ele.attr('class','gg-btn gg-active-btn').text('Join Room');
              $('#msg').text(data.message);
            }else{
              localStorage.setItem("_rid",btoa(btoa(data.data)));
              localStorage.setItem("plc",data.place);
              localStorage.setItem("st",data.state);
              $('#msg').text('init player settings ..');
             window.open('/Whoiam','_self');
            }
      }).catch((error) => {
        console.error(error);
      });

  }
