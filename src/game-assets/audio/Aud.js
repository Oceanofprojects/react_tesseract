
import {useState,React} from 'react';
import ReactPlayer from 'react-player';
import clk_sfx from './click.mp3';

export default function Aud_brd_(){
const [sfxState, SetSfx] = useState(false);
  const PlaySfx = () => {
    SetSfx(true);
  };

  const ResetSfx = () => {
    SetSfx(false);
  };


	return (<><button id="clk_sfx" style={{'display':'none'}} onClick = {()=>PlaySfx()}></button><ReactPlayer 
    style={{'display':'none'}}
    onEnded={ResetSfx}
    url={clk_sfx}
    playing = {sfxState}
    type = 'audio/mp3'
/></>);
}


