// import Demo from './game-assets/g-script/G-action';
import './Center_content.css';



function Center_content() {
  return (
    <div className="center-content">
    <h1 className="g-title">Raja&nbsp;<b style={{color:'red'}}>&hearts;</b>&nbsp;Rani</h1>
        <h6 style={{textAlign:'right',padding:'20px 0px'}}>New multiplayer. V.0.11</h6>
        <center>
        <button className="active-btn" onclick="c_sfx();demo()">Create room</button>
        <button className="active-btn" onclick="c_sfx();joinRoom();">Join room</button>
        </center>   
        <div className='rightFloatBtns'>
          <button className="active-btn fa fa-user" onclick="c_sfx();window.open('character.php','_self')"></button>
      </div>
    </div>
  );
}


{/* <div className="center-content">
    <h1 className="g-title">Raja&nbsp;<lord-icon src="https://cdn.lordicon.com/xmuplryc.json" trigger="loop" state="loop-wifi" style="width:50px;height:50px;" colors="primary:yellow">
</lord-icon>&nbsp;Rani</h1>
    <h6 style="text-align: right;">New multiplayer. V.0.11</h6>
    <br><br>
    <center>
    <button className="active-btn" onclick="c_sfx();crRoom();">Create room</button>
    <button className="active-btn" onclick="c_sfx();joinRoom();">Join room</button>   
        

    </center>
    <div  style="position:absolute;top:10px;right:10px;">
	<button className="active-btn fa fa-user" onclick="c_sfx();window.open('character.php','_self')"></button>
	</div>
</div> */}
export default Center_content;
