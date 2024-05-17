
import {useState,React} from 'react';
import ReactPlayer from 'react-player';
import clk_sfx from './game-assets/audio/click.mp3';

export default function Aud_brd_(){
const [sfxState, SetSfx] = useState(false);
  const PlaySfx = () => {
    SetSfx(true);
  };

  const ResetSfx = () => {
    SetSfx(false);
  };


	return (<><button onClick = {()=>PlaySfx()}>Test Sound</button><ReactPlayer 
    style={{'display':'none'}}
    onEnded={ResetSfx}
    url={clk_sfx}
    playing = {sfxState}
    type = 'audio/mp3'
/></>);
}


