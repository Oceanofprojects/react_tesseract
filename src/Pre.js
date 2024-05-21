
import $ from 'jquery';
import React from 'react';

export default function Pre_init(url_data = {'url_data':{'sfx_time_unit':50}}){
  //Calling click sound from SFX
  $('#clk_sfx').click();
  setTimeout(()=>{
    if(url_data.action){
    if(url_data.action.open_nxt){
        window.open(url_data.action.open_nxt,'_self');      
    }
  }
  },url_data.sfx_time_unit);
}


