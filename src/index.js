import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
//import App from './FrontPage';
//import App from './AdminFrontPage';
//import App from './StudentFrontPage';




ReactDOM.render(
<Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')
);



