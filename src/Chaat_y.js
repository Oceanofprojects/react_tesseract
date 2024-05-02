import $ from 'jquery';
import top_ct_ from './game-assets/gg-design/gg-gold-icons/top.png';
import bottom_ct_ from './game-assets/gg-design/gg-gold-icons/bottom.png';


function OpCt(){
    $('._ct_').css({
      'display':'flex'
    });
}

function ClsCt(){
    $('._ct_').css({
      'display':'none'
    });
}
 

function Chaat_y(){
   return(
<section className="_ct_" onClick={ClsCt}>
    <div className="_inner_ct_ui_layer">
  <div style={{'display': 'flex','justify-content': 'center','align-items': 'center','background':`url(${top_ct_})`,'backgroundSize':'100% 100%','width':'100%','height':'60px'}}>
    <span>
        RajaRani
      
    </span>
  </div>


<center>  <div className="main_ct">


      <div className="_ct_ui_cnt">
        <div className="ct_bx">
          <p>
          <span>Dhinesh</span>&nbsp;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. anim id est laborum.
          </p>
        </div>
        <div class="ct_bx">
          <p>
          <span>Mani</span>&nbsp;
            Lorem ipsum dolor sit amet, cia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="ct_bx">
          <p>
          <span>Raja</span>&nbsp;
            Lorem ipsum dolor sit amet, conser. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </div>
      
    
      <div className="_ct_ui_footer">
          <input type="text" name="" placeholder="Fun with friends !" />
      </div>
    
  </div>
  </center>

  <div style={{'background':`url(${bottom_ct_})`,'backgroundSize':'100% 100%','width':' 100%','height': '90px'}}>
        <br/>  <center><input className="gg-btn gg-active-btn"style={{'margin':'0px'}} type="button" name="" value="Send"/>
    </center>
  </div>
    


    </div>
  </section>
  );
}

export {OpCt,ClsCt,Chaat_y};