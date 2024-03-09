import $ from 'jquery';
import {useState , useEffect} from 'react';
import DryLeafLayer from '../DryLeafLayer.js';
import minister from '../game-assets/gg-design/characters/minister.jpg';
import king from '../game-assets/gg-design/characters/king.jpg';
import queen from '../game-assets/gg-design/characters/queen.jpg';
import thief from '../game-assets/gg-design/characters/thief.jpg';
import wizard from '../game-assets/gg-design/characters/wizard.jpg';
import police from '../game-assets/gg-design/characters/police.jpg';
import {useNavigate} from 'react-router-dom';

var _this_roomid = null;

export default function Whoiam(){
  let [btn_acs,set_btn_acs] = useState(false);
  window.onbeforeunload=function(){
    alert("END")
  }
  let navigate = useNavigate();

  function PlayersFetched_(){
    let data = "module=eachfetch&roomid="+_this_roomid;
    const response = fetch("http://localhost/raja-rani/api/index.php", {
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
            if(data.room.flag){
              var pri = (data.characters.pri.result.length - data.players.waiting_players.data.length);
              if(data.players.waiting_players.data.length < data.characters.pri.result.length){
                $('#player_fetch_cal').text("Waiting for "+pri+' to '+(pri+(data.characters.non_pri.result.length))+" more players !..");
                set_btn_acs(false);
              }else{
                if(localStorage.getItem('st')==null){
                  $('#gameStartadminBtn').hide();
                }else{
                  if(localStorage.getItem('st')=='acs'){
                    $('#player_fetch_cal').text("");
                    if(btn_acs){
                      $('#gameStartadminBtn').show();
                    }
                  }else{
                    $('#player_fetch_cal').text("Waiting for admin action");
                    $('#gameStartadminBtn').hide();
                  }
                }
              }
            }else{
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
  alert()

  let data = "module=character_allocate&roomid="+_this_roomid;
  const response = fetch("http://localhost/raja-rani/api/index.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
    body: data
  })
    .then(async (res) => {
      data = await res.json();
      if(data.flag){
        set_btn_acs(true);
        $('#gameStartadminBtn').hide();
      }else{
        $('#player_fetch_cal').text(data.message).css('color','tomato');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

    function Choose_Character(id = 0){
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
                		$('.char_'+_mychar).css({
                			'box-shadow':'0px 0px 5px 5px rgba(256,256,256,.5),0px 0px 10px 10px rgba(256,256,256,.2)'
                    	});
    					$('#btn').prop({'disabled':false,'class':'gg-btn gg-active-btn'}).text('Next Step').attr('onclick','window.open("/Playground","_self")');
                	}else{
                		speed+=100;
    	            	Choose_Character();
    	            	innerloop++;
                	}
                }
    }//ANIMATION END
    function Get_Character(){
      $('#btn').prop({'disabled':true,'class':'gg-btn gg-in-active-btn'}).text('Getting in random..')

      var plc = localStorage.getItem('plc');
      if(plc==null){
        return;
      }
      let data = "module=_get_my_char&roomid="+_this_roomid+"&plc="+plc;
      const response = fetch("http://localhost/raja-rani/api/index.php", {
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
    if(localStorage.getItem('_rid') == null){
      return "INVALID ID !";
    }else{
      if(localStorage.getItem('_rid').length > 0){
        _this_roomid = atob(atob(localStorage.getItem('_rid')));
        return  'ID : '+_this_roomid;
      }else{
        return "INVALID ID !";
      }
    }
  }//ROOM END

useEffect(()=>{
  const ind = setInterval(()=>{PlayersFetched_()},3000);
  return ()=>clearInterval(ind);
},[]);
  ;
  return (
    <>
<DryLeafLayer/>
<br /><br/><br/>
<h1 className="g-title">Make<span style={{color:'darkred'}}>up</span> Room</h1>
<center>
<br/>
<span id="player_fetch_cal" style={{color:"#fff"}}></span>
<br /><br/>

    <section className="c-profile-layer">
        <div className="c-profile char_5" style={{backgroundImage:`url(${minister})`,backgroundPosition:'center'}}>
                <span>
                    Minister {_this_roomid}
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
                <button className="active-btn fa fa-share-alt"></button>
            </div>
            <div className='FloatLabel leftFloatLabel'>
            <label><Room /></label>
          </div>
  </center>
  <br/><br/><br/><br/>
    </>
  );
}
