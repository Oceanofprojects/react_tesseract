import $ from 'jquery';
import DryLeafLayer from '../DryLeafLayer.js';
import minister from '../game-assets/gg-design/characters/minister.jpg';
import king from '../game-assets/gg-design/characters/king.jpg';
import queen from '../game-assets/gg-design/characters/queen.jpg';
import thief from '../game-assets/gg-design/characters/thief.jpg';
import wizard from '../game-assets/gg-design/characters/wizard.jpg';
import police from '../game-assets/gg-design/characters/police.jpg';



export default function Whoiam(){
  let speed=100;//DEFAULT LOOP SPEED
  let loop=0;
  let flag=false;
  let innerloop = 0;
  let timeOfloop = 4;
  let tmp=null;
  let _mychar;

  return (
    <>
    <br/>
    <br/>
<DryLeafLayer/>
<h1 className="g-title">Make<span style={{color:'darkred'}}>up</span> Room</h1>
<br/><center>
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
              <button className="gg-btn gg-active-btn" id="btn" style={{margin:'40px 0px',padding:'20px'}} onClick={Get_Character}>Who i'm ?</button>
  </center>
    </>
  );


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

}
