import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {xApiAttributeName}  from 'mottai-iframe-bridge'
import './index.css'

window.onload = function() {
  if (window[xApiAttributeName]) {
      window[xApiAttributeName].test_console('test');
      window[xApiAttributeName].setSizeSelector('.my-container-size');
  }
  // document.getElementById('reload').onclick = function() {
  //     window.location.reload();
  // };
  // document.getElementById('resize').onclick = function() {
  //     var div = document.getElementById('toggleDiv');
  //     if (div.style.display == 'none') {
  //         div.style.display = 'block';
  //     } else {
  //         div.style.display = 'none';
  //     }
  //     var elem = window.document.querySelector('.my-container-size');
  //     window._fitiframe_api.sendSize({ width: elem.offsetWidth, height: elem.offsetHeight });
  // };
  // document.getElementById('buy').onclick = function() {
  //     window._fitiframe_api.sendCommand({ command: 'popup_neworder', params: { side: 'buy', instrument: { symbol: 'BHP', exchange: 'ASX' }, quantity: 1000, price: 100.00 }});
  // };
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
