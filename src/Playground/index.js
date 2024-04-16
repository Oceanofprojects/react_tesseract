import $ from 'jquery';
import DryLeafLayer from '../DryLeafLayer.js';
import {useEffect} from 'react';
import minister from '../game-assets/gg-design/characters/minister.jpg';
import king from '../game-assets/gg-design/characters/king.jpg';
import queen from '../game-assets/gg-design/characters/queen.jpg';
import thief from '../game-assets/gg-design/characters/thief.jpg';
import wizard from '../game-assets/gg-design/characters/wizard.jpg';
import police from '../game-assets/gg-design/characters/police.jpg';
import gift from '../game-assets/gg-design/gg-gold-icons/gift.jpg';
import API_ENV from '../Api/RR_ENV.json';

export default function Playground(){
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
            let dis_wait_players = '( ';
            for(let i=0;i<players.waiting_players.data.length;i++){
                dis_wait_players +='/'+players.waiting_players.data[i].players;
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
      // alert()
  }


useEffect(()=>{
const intr = setInterval(()=>{
  Eachfetch_()
},3000);
return ()=>clearInterval(intr);
},[]);

  return (
    <>
    <br/>
    <br/>
<DryLeafLayer/>
<h1 style={{color:'#fff',textAlign:'center'}}>Ground</h1>
<br/><br/>
<br/>
<center>

<span id="player_fetch_cal" style={{color:"#fff"}}>asas</span>
<br/>
<br/>

<section className="c-profile-layer">
<center >
        <div className="char_1" style={{position:'relative',bottom:'0',left:'0',backgroundImage:`url(${police})`,backgroundPosition:'center',height:'250px',width:'200px',color:'#fff'}}>
          <span style={{position:'absolute',top:'0',left:'0',opacity:'.8',background:'rgba(0,0,0,.8)',padding:'5px',color:'#fff'}}>
              Dhinesh - Police
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
    <section className="c-profile-layer">
        <div className="c-profile" style={{backgroundImage:`url(${gift})`,backgroundPosition:'center'}}>
        </div>

        <div className="c-profile char_2" style={{backgroundImage:`url(${minister})`,backgroundPosition:'center'}}>
          <span style={{display:'block',opacity:'.8'}}>
              You
          </span>
        </div>

        <div className="c-profile" style={{backgroundImage:`url(${gift})`,backgroundPosition:'center'}}>
        </div>

        <div className="c-profile" style={{backgroundImage:`url(${gift})`,backgroundPosition:'center'}}>
        </div>

        <div className="c-profile" style={{backgroundImage:`url(${gift})`,backgroundPosition:'center'}}>
        </div>

     </section>
  </center>
  <div className='rightFloatBtns'>
    <button className="active-btn fa fa-home" style={{position:'absolute',top:'10px',right:'10px'}} onClick={()=>window.open('/Home','_self')}>Home</button>
</div>
    </>
  );

}
