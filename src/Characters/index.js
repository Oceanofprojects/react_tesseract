import $ from 'jquery';
import Back_Lay from '../Layout';
import './Characters_Layer.css';
import DryLeafLayer from '../DryLeafLayer.js';
import minister from '../game-assets/gg-design/characters/minister.jpg';
import king from '../game-assets/gg-design/characters/king.jpg';
import queen from '../game-assets/gg-design/characters/queen.jpg';
import thief from '../game-assets/gg-design/characters/thief.jpg';
import wizard from '../game-assets/gg-design/characters/wizard.jpg';
import police from '../game-assets/gg-design/characters/police.jpg';


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
        <div className="c-profile char_1" style={{backgroundImage:`url(${minister})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    Minister
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_2" style={{backgroundImage:`url(${king})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    King
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_2" style={{backgroundImage:`url(${queen})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    Queen
                </span>
            <div className="corner-frame"></div>
        </div>

        <div className="c-profile char_2" style={{backgroundImage:`url(${thief})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    Thief
                </span>
            <div className="corner-frame"></div>
        </div>
        <div className="c-profile char_2" style={{backgroundImage:`url(${wizard})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    Wizard
                </span>
            <div className="corner-frame"></div>
        </div>
        <div className="c-profile char_2" style={{backgroundImage:`url(${police})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                <span>
                    Police
                </span>
            <div className="corner-frame"></div>
        </div>
      </section>
    </>
  );



}
