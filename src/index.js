import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Center_content from './Center_content';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
  <Header />
    <Center_content />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
