import $ from 'jquery';
import top_ct_ from './game-assets/gg-design/gg-gold-icons/top.png';
import bottom_ct_ from './game-assets/gg-design/gg-gold-icons/bottom.png';
import wood from './game-assets/gg-design/gg-gold-icons/wood.png';


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
<section className="_ct_">
    <div className="_inner_ct_ui_layer">
  <div style={{'position':'relative','top':'0px','left':'0px','display': 'flex','justify-content': 'center','align-items': 'center','background':`url(${top_ct_})`,'backgroundSize':'100% 100%','width':'100%','height':'60px'}}>
        <h1 style={{'color':'#fff'}}>Raja <b style={{'color':'red'}}>&hearts;</b> Rani</h1>
        <span onClick={ClsCt} className="fa fa-close gg-cls-btn" style={{
          'position':'absolute',
         'right':'0px',
         'top':'0'
        }}></span>
        </div>


<center>  <div className="main_ct" style={{'background':`linear-gradient(transparent,rgba(0,0,0,.7)),url(${wood})`,'backgroundSize':'100%'}}>


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

  <div style={{'background':`url(${bottom_ct_})`,'backgroundSize':'100% 100%','width':' 100%','height': '100px'}}>
        <br/>  <center><input className="gg-btn gg-active-btn"style={{'margin':'0px'}} type="button" name="" value="Send"/>
    </center>
  </div>
    


    </div>
  </section>
  );
}

export {OpCt,ClsCt,Chaat_y};