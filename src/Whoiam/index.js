import $ from 'jquery';
import {useState,useRef, useEffect} from 'react';
import DryLeafLayer from '../DryLeafLayer.js';
import {OpCt,ClsCt,Chaat_y} from '../Chaat_y.js';
import minister from '../game-assets/gg-design/characters/minister.jpg';
import king from '../game-assets/gg-design/characters/king.jpg';
import queen from '../game-assets/gg-design/characters/queen.jpg';
import thief from '../game-assets/gg-design/characters/thief.jpg';
import wizard from '../game-assets/gg-design/characters/wizard.jpg';
import police from '../game-assets/gg-design/characters/police.jpg';
import {useNavigate} from 'react-router-dom';
import API_ENV from '../Api/RR_ENV.json';
import './whoiam.css';
import '../chaat_y.css';



var _this_roomid = null;
var _mybtnstate=false;

export default function Whoiam(){
  const [btn_acs,set_btn_acs] = useState(false);
  const [stop_effect,set_stop_effect] = useState(true);
  
  let navigate = useNavigate();
  useEffect(()=>{
  if(stop_effect){
      const ind = setInterval(()=>{PlayersFetched_()},3000);
      return ()=>clearTimeout(ind);
   }
  },[stop_effect]);

  function PlayersFetched_(){
    let data = "module=eachfetch&roomid="+_this_roomid;
    const response = fetch(API_ENV.ENV.USE_ENV.URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: data
    })
      .then(async (res) => {
        data = await res.json();
          Object.entries(data).map((obj)=> {
            if(!obj[1].flag){
              return;
            }
            if(data.room.room_valid.flag){
              var pri = (data.characters.pri.result.length - data.players.waiting_players.data.length);
              let btn_acs_stt = null;
              if(data.players.waiting_players.data.length < data.characters.pri.result.length){
                $('#player_fetch_cal').text("Waiting for "+pri+' to '+(pri+(data.characters.non_pri.result.length))+" more players !..");
                // set_btn_acs(false);
              }else{
                if(localStorage.getItem('st')==null || localStorage.getItem('st')=='null'){
                  $('#gameStartadminBtn').hide();
                }else{
                  if(localStorage.getItem('st')=='acs'){
                   $('#player_fetch_cal').text("");
                   if(_mybtnstate){
                     $('#gameStartadminBtn').hide();  
                      }else{
                      $('#gameStartadminBtn').show();  
                   }
                  }else{
                      $('#gameStartadminBtn').hide();
                    if(data.room.room_state.data.status == 'open'){
                      $('#player_fetch_cal').text("Select your character by click Whoaim ?");
                      set_btn_acs(true);
                    }else{
                      set_btn_acs(false);  
                      $('#player_fetch_cal').text("Waiting for admin action");
                    }
                  }
                }
              }
            }else{
              set_stop_effect(false);//Stop fetch
              localStorage.setItem("_rid",null);
              localStorage.setItem("plc",null);
              localStorage.setItem("st",null);
              localStorage.setItem('ch_plc',null);
              $('#player_fetch_cal').text("Oops, Room Close / Expired !");
              set_btn_acs(false);
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });
      // alert()
  }



  let speed=100;//DEFAULT LOOP SPEED
  let loop=0;
  let flag=false;
  let innerloop = 0;
  let timeOfloop = 4;
  let tmp=null;
  let _mychar;
  let roomid =11;

function Assign_char(){
  let data = "module=character_allocate&roomid="+_this_roomid;
  const response = fetch(API_ENV.ENV.USE_ENV.URL, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
    body: data
  })
    .then(async (res) => {
      data = await res.json();
      if(data.flag){
        _mybtnstate = true;
        set_btn_acs(_mybtnstate);
        alert(data.message)
      }else{
        $('#player_fetch_cal').text(data.message).css('color','tomato');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

    function Choose_Character(id = 0)
    {
      if(id!==0){
        _mychar = id;
      }
               if (loop < $('.c-profile').length) {
               		if(flag){
               			$('.char_'+(tmp+1)).css({
                'box-shadow':'0px 0px 5px 5px rgba(0,0,0,.3),0px 10px 10px 10px rgba(0,0,0,.1)'
                    });
                    // console.log('.char_'+(tmp+1)+'TRANS1')

               		}else{
               			flag = true;
               		}
                    $('.char_'+(loop+1)).css({
                'box-shadow':'0px 0px 5px 5px rgba(256,256,256,.5),0px 0px 10px 10px rgba(256,256,256,.2)'
                    });
                    // console.log('.char_'+(loop+1)+'RED')

                    setTimeout(function(){
                    	Choose_Character()
                    }, speed);
                    tmp = loop;
                loop++;
                }else{
                	$('.char_'+(loop)).css({
    		            'box-shadow':'0px 0px 5px 5px rgba(0,0,0,.3),0px 10px 10px 10px rgba(0,0,0,.1)'
                    });
                    // console.log('.char_'+(loop)+'TRANS')
                	loop = 0;
                	tmp = 0;
                	flag = false;
                	if(innerloop === timeOfloop){
                		//AFTER LOOP ANIMATION
                    // $('#player_fetch_cal').text("Your char ID "+_mychar);

                		$('.char_'+_mychar).css({
                			'box-shadow':'0px 0px 5px 5px rgba(256,256,256,.5),0px 0px 10px 10px rgba(256,256,256,.2)'
                    	});
    					$('#btn').prop({'disabled':false,'class':'gg-btn gg-active-btn'}).text('Next Step').on('click',function(){
          let data = "module=change_player_mode&roomid="+_this_roomid+"&st=act&plc="+localStorage.getItem('plc');
          // console.log(data)
            const response = fetch(API_ENV.ENV.USE_ENV.URL, {
              method: "POST",
              headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded",
              }),
              body: data
            })
              .then(async (res) => {
                data = await res.json();
                if(data.flag){
                  window.open("/Playground","_self");
                }else{
                  $('#player_fetch_cal').text(data.message).css('color','tomato');
                }
              })
              .catch((error) => {
                console.error(error);
              })
              });	}else{
                		speed+=100;
    	            	Choose_Character();
    	            	innerloop++;
                	}
                }
    }//ANIMATION END
    function Get_Character(){
      $('#btn').prop({'disabled':true,'class':'gg-btn gg-in-active-btn'}).text('Getting in random..')
//
      var plc = localStorage.getItem('plc');
      if(plc==null){
        return;
      }
      let data = "module=_get_my_char&roomid="+_this_roomid+"&plc="+plc;
      const response = fetch(API_ENV.ENV.USE_ENV.URL, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: data
      })
        .then(async (res) => {
          data = await res.json();
          if(data.flag){
            if(data.data.length > 0){
              localStorage.setItem('ch_plc',data.data[0].ch_plc);
              Choose_Character(data.data[0].ch_plc);//Choosing real id character
            }
          }else{
            $('#player_fetch_cal').text(data.message).css('color','tomato');
          }
        })
        .catch((error) => {
          console.error(error);
        });

    }

  function Room(){
    if(localStorage.getItem('_rid') == null || localStorage.getItem('_rid') == 'null'){
      return "INVALID ID !";
    }else{
        _this_roomid = atob(atob(localStorage.getItem('_rid')));
        return  'ID : '+_this_roomid;
    }
  }//ROOM END

  function clsShareUI(){
    $('.share_room_layout').css("display","none");
  }

function opShareUI(){
    $('.share_room_layout').css("display","flex");
  }

  function copy2clip(){
    $("#room_url").select();
    document.execCommand("copy");
  }

function Share_room_layout(){
  return (<section className="share_room_layout">
    <input type="text" value="TEST URL" id="room_url"/>
   <button onClick={clsShareUI} style={{"border":"none","position":"absolute","top":"0px","left":"0px","padding":"7px"}} className="fa fa-close btn active-btn">&nbsp;&nbsp;Close</button>
    <div className="room_share">
   <button className="fa fa-share-alt gg-btn gg-active-btn" onClick={copy2clip}>&nbsp;&nbsp;Invite Friends</button>
   </div>
    </section>);
}



  return (
    <>
<DryLeafLayer/>

<Share_room_layout/>
<Chaat_y/>
<br /><br/><br/>
<h1 className="g-title">Make<span style={{color:'darkred'}}>up</span> Room</h1>
<center>
<br/>
<span id="player_fetch_cal" style={{color:"#fff"}}></span>
<br /><br/>

    <section className="c-profile-layer">
        <div className="c-profile char_5" style={{backgroundImage:`url(${minister})`,backgroundPosition:'center'}}>
                <span>
                    Minister
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_1" style={{backgroundImage:`url(${king})`,backgroundPosition:'center'}}>
                <span>
                    King
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_2" style={{backgroundImage:`url(${queen})`,backgroundPosition:'center'}}>
                <span>
                    Queen
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_3" style={{backgroundImage:`url(${thief})`,backgroundPosition:'center'}}>
                <span>
                    Thief
                </span>
            <div className="corner-frame"></div>
        </div>
        <div className="c-profile char_6" style={{backgroundImage:`url(${wizard})`,backgroundPosition:'center'}}>
                <span>
                    Wizard
                </span>
            <div className="corner-frame"></div>
        </div>
        <div className="c-profile char_4" style={{backgroundImage:`url(${police})`,backgroundPosition:'center'}}>
                <span>
                    Police
                </span>
            <div className="corner-frame"></div>
        </div>
      </section>
              <button className={`gg-btn ${btn_acs?"gg-active-btn":"gg-in-active-btn"}`} onClick={btn_acs?Get_Character:()=>alert('Waiting players !')} id="btn"  style={{margin:'40px 0px',padding:'20px','display':`${btn_acs?"block":"none"}`}}>Who i'm ?</button>

              <button className="gg-btn gg-active-btn" onClick={Assign_char} id="gameStartadminBtn"  style={{margin:'40px 0px',padding:'20px'}}>Ready !</button>

              <div className='rightFloatBtns'>
              <button className="active-btn fa fa-chevron-left" onClick={()=>navigate(-1)}></button>
              <button className="active-btn fa fa-comment-o" onClick={OpCt}></button>
                <button className="active-btn fa fa-share-alt" onClick={opShareUI}></button>
            </div>
            <div className='FloatLabel leftFloatLabel'>
            <label><Room /></label>
          </div>
  </center>
  <br/><br/><br/><br/>
    </>
  );
}
