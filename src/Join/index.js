import $ from 'jquery';
import DryLeafLayer from '../DryLeafLayer';
import {useNavigate} from 'react-router-dom';
import API_ENV from '../Api/RR_ENV.json';

export default function Join_room() {
  let navigate = useNavigate();
    return (
      <div className="center-content">
      <h1 className="g-title">Join <span style={{color:'darkred'}}>R</span>oom</h1>
      <br/>
      <DryLeafLayer/>
      <form>
          <center>
          <input type="text" maxlength="10" className="gg-txt-box" id="name" placeholder="Your name" />
          <br />
          <input type="text" maxlength="5" className="gg-txt-box"  id="roomid" placeholder="Room-ID" />
          <br /><br /><input type="button" className="gg-btn gg-active-btn" onClick={Join} value="Join Room" />
          <br /><br />
          <span id="msg" style={{color:'tomato'}}></span>
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
const Join =(event)=>{
  let ele = event.currentTarget;
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
  ele.className = 'gg-btn gg-in-active-btn';
  ele.value = 'Joining room ..';
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
              ele.className = 'gg-btn gg-active-btn';
              ele.value = 'Join Room';
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
