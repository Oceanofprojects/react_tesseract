import $ from 'jquery';
import {useState} from 'react';
import DryLeafLayer from '../DryLeafLayer.js';
import minister from '../game-assets/gg-design/characters/minister.jpg';
import king from '../game-assets/gg-design/characters/king.jpg';
import queen from '../game-assets/gg-design/characters/queen.jpg';
import thief from '../game-assets/gg-design/characters/thief.jpg';
import wizard from '../game-assets/gg-design/characters/wizard.jpg';
import police from '../game-assets/gg-design/characters/police.jpg';
import {useNavigate} from 'react-router-dom';


export default function Whoiam(){
  let [btnState,setBtnState] = useState(false);
  let navigate = useNavigate();
  // let btnState=false;
  function PlayersFetched_(){
    let data = "module=eachfetch&roomid=D3928";
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
              console.log(obj[1]);
              return;
            }
            if(data.players.waiting_players.data.length < data.characters.pri.result.length){
              $('#player_fetch_cal').text("Waiting for "+(data.characters.pri.result.length - data.players.waiting_players.data.length)+" more players !..");
            }else{
              $('#player_fetch_cal').text("Waiting for admin action !");
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
    	//CODE AJAX HERE

    	/**
    	 *
    	 * FIND PLAYER'S CHARACTER ID BASED ON PLAYER'S UNI-ID
    	 *
    	 * */
       Choose_Character((Math.floor(Math.random()*5)+1));//DEFAULT RAND ID (FOR TESTING)...
    }

  function Room(){
    var searchQuery = new URLSearchParams(window.location.search);
    let params = new Map();
    searchQuery.forEach((value,key)=>{
      params.set(key,value);
    });
    let room_data = params;
    if(room_data.has('roomid')){
      setBtnState(true);
      return  'ID : '+atob(atob(room_data.get('roomid')));
    }else{
      return "INVALID ID !";
    }

  }//ROOM END

  return (

    <>
<DryLeafLayer/>
<h1 className="g-title">Make<span style={{color:'darkred'}}>up</span> Room</h1>
<center>
<br/>
<span id="player_fetch_cal" style={{color:"#fff"}}></span>
<br /><br/>

    <section className="c-profile-layer">
        <div className="c-profile char_1" style={{backgroundImage:`url(${minister})`,backgroundPosition:'center'}}>
                <span>
                    Minister
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_2" style={{backgroundImage:`url(${king})`,backgroundPosition:'center'}}>
                <span>
                    King
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_3" style={{backgroundImage:`url(${queen})`,backgroundPosition:'center'}}>
                <span>
                    Queen
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_4" style={{backgroundImage:`url(${thief})`,backgroundPosition:'center'}}>
                <span>
                    Thief
                </span>
            <div className="corner-frame"></div>
        </div>
        <div className="c-profile char_5" style={{backgroundImage:`url(${wizard})`,backgroundPosition:'center'}}>
                <span>
                    Wizard
                </span>
            <div className="corner-frame"></div>
        </div>
        <div className="c-profile char_6" style={{backgroundImage:`url(${police})`,backgroundPosition:'center'}}>
                <span>
                    Police
                </span>
            <div className="corner-frame"></div>
        </div>
      </section>
              <button className={`gg-btn ${btnState?"gg-active-btn":"gg-in-active-btn"}`} onClick={btnState?<Get_Character/>:()=>{alert("Invalid room ID")}} id="btn"  style={{margin:'40px 0px',padding:'20px'}}>Who i'm ?</button>
              <div className='rightFloatBtns'>
              <button className="active-btn fa fa-chevron-left" onClick={()=>navigate(-1)}></button>
                <button className="active-btn fa fa-share-alt"></button>
                <button id="rid_bd" className="active-btn" onClick={PlayersFetched_}>Check JX</button>
            </div>
            <div className='FloatLabel leftFloatLabel'>
            <label><Room /></label>
          </div>
  </center>
  <br/><br/><br/><br/>
    </>
  );
}
