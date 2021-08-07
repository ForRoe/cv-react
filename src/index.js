import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import i18n (needs to be bundled ;))
import './components/i18n';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
