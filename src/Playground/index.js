import $ from 'jquery';
import DryLeafLayer from '../DryLeafLayer.js';
import {useEffect,useState} from 'react';
import minister from '../game-assets/gg-design/characters/minister.jpg';
import king from '../game-assets/gg-design/characters/king.jpg';
import queen from '../game-assets/gg-design/characters/queen.jpg';
import thief from '../game-assets/gg-design/characters/thief.jpg';
import wizard from '../game-assets/gg-design/characters/wizard.jpg';
import police from '../game-assets/gg-design/characters/police.jpg';
import gift from '../game-assets/gg-design/gg-gold-icons/gift.jpg';
import API_ENV from '../Api/RR_ENV.json';

export default function Playground(){
const [police_name,set_police_name] = useState('TBD');

  const _local_chars  = {
    1:king,
    2:queen,
    3:thief,
    4:police,
    5:minister,
    6:wizard
  };
const [box,setBox] = useState('Getting room info .. ');
const [stop_effect,set_stop_effect] = useState(true);

  function Eachfetch_(){
    var roomid = localStorage.getItem('_rid');
    if(roomid==null){
      return;
    }
    let data = "module=eachfetch&roomid="+atob(atob(roomid));
    const response = fetch(API_ENV.ENV.USE_ENV.URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: data
    })
      .then(async (res) => {
        data = await res.json();
const players = data.players;
if((localStorage.getItem('st')==null && localStorage.getItem('ch_plc')==null && localStorage.getItem('plc')==null)){
    alert('Something wrong contact admin');
  set_stop_effect(false);//stop fetch
}else{
    for(let i=0;i<players.online_players.data.length;i++){
      if(parseInt(players.online_players.data[i].character_id) == 4){//Checking police ID display
        set_police_name(players.online_players.data[i].players);
      }
    }
  
  upUI(data); 
}

            let dis_wait_players = '( ';
            for(let i=0;i<players.waiting_players.data.length;i++){
              if(i==0){
                dis_wait_players +=players.waiting_players.data[i].players;
              }else{
                dis_wait_players +=', '+players.waiting_players.data[i].players;
              }
            }
            dis_wait_players += ' )';

            if(players.all_players.data.length == players.online_players.data.length){
              console.log("READY TO PLAY");
            }else{
                $('#player_fetch_cal').text('Waiting for '+dis_wait_players);
            }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(()=>{
  if(stop_effect){
    const intr = setInterval(()=>{
  Eachfetch_()
},3000);
return ()=>clearInterval(intr);
   }
  },[stop_effect]);

function upUI(data){
  const boxes = data.players.online_players.data.map((d) =>
  (d.character_id!='4')?
  (d.id == localStorage.getItem('plc'))?
    <div className="c-profile" style={{"backgroundImage":`url(${_local_chars[localStorage.getItem('ch_plc')]})`,"backgroundPosition":'top',"backgroundSize":'cover'}}>
  <span style={{"display":"block","opacity":".8"}}>You</span></div> :
    <div className="c-profile" style={{"backgroundImage":`url(${gift})`,"backgroundPosition":'center'}}>
  <span style={{"display":"block","opacity":".8"}}>
{d.players}        </span></div>
:<></>);
  setBox(boxes);
}

  return (
    <>
    <br/>
    <br/>
<DryLeafLayer/>
<h1 style={{color:'#fff',textAlign:'center'}}>Ground</h1>
<br/><br/>
<br/>
<center>

<span id="player_fetch_cal" style={{color:"#fff"}}></span>
<br/>
<br/>

<section className="c-profile-layer">
<center >
        <div style={{position:'relative',bottom:'0',left:'0',backgroundImage:`url(${police})`,backgroundSize:'cover',backgroundPosition:'top',height:'300px',width:'50%',minWidth:'200px',color:'#fff','borderRadius':'10px'}}>
          <span style={{position:'absolute',top:'0',left:'0',opacity:'.8',background:'rgba(0,0,0,.8)',padding:'5px',color:'#fff'}}>
              {police_name} - Police
          </span>
          <div className="corner-frame"></div>

        </div>
        </center>
      </section>
      <br/>
      <center>
      <hr style={{border:'2px solid #ddda',width:'25%',margin:'25px 0px'}}/>
    </center>
      <br/>
    <section className="c-profile-layer sub-players">
    {box}
     </section>
  </center>
  <div className='rightFloatBtns'>
    <button className="active-btn fa fa-home" style={{position:'absolute',top:'10px',right:'10px'}} onClick={()=>window.open('/Home','_self')}>Home</button>
</div>
    </>
  );

}
