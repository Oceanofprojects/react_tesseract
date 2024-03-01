import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import './index.css';
import Create_Room from './Create/';
import Join_room from './Join/';
import Home from './Home/';
import Characters from './Characters/';
import Whoiam from './Whoiam/';
import Playground from './Playground/';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/Home" element={<Home />}/>
        <Route  path="/CreateRoom" element={<Create_Room />}/>
        <Route  path="/JoinRoom" element={<Join_room />}/>
        <Route  path="/Characters" element={<Characters />}/>
        <Route  path="/Whoiam" element={<Whoiam />}/>
        <Route  path="/Playground" element={<Playground />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
