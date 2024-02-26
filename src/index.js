import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import './index.css';
import Create_room from './Create_room';
import Join_room from './Join_room';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/CreateRoom" element={<Create_room />}/>
        <Route  path="/JoinRoom" element={<Join_room />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
