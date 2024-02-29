import $ from 'jquery';
import Back_Lay from '../Layout';
import './Characters_Layer.css';
import DryLeafLayer from '../DryLeafLayer.js';


export default function Characters(){
  return (
    <>
    <Back_Lay attr={{url:'../game-assets/gg-design/bg4.png'}} />
    <br/>
    <br/>
<DryLeafLayer/>
<h1 class="g-title">Cha<span style={{color:'darkred'}}>r</span>acters</h1>
<br/>
    <section className="c-profile-layer">
        <div className="c-profile char_1" style={{backgroundImage:"url(require('../game-assets/gg-design/characters/minister.jpg'))",backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    Minister
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_2" style={{backgroundImage:"url('game-assets/gg-design/characters/king.jpg')",backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    King
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_2" style={{background:`url("../game-assets/gg-design/characters/thief.jpg")`,backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    Thief
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_2" style={{background:`url(..//game-assets/gg-design/characters/queen.jpg)`,backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    Queen
                </span>
            <div className="corner-frame"></div>
        </div>
        <div className="c-profile char_2" style={{background:`url(../game-assets/gg-design/characters/police.jpg)`,backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    Police
                </span>
            <div className="corner-frame"></div>
        </div>
        <div className="c-profile char_2" style={{background:`url(./game-assets/gg-design/characters/wizard.jpg)`,backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    Wizard
                </span>
            <div className="corner-frame"></div>
        </div>
      </section>
    </>
  );



}
