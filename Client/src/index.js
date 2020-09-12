import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import jwtDecode from 'jwt-decode';

//import from Storage
import * as Types from './Store/Types';
import store from './Store';
import SetAuthToken from './Utils/SetAuthToken';

const token = localStorage.getItem('auth_Token');

if(token) {
  let decode = jwtDecode(token);
  // console.log(decode)
  //Set Auth Header
  SetAuthToken(token)
  store.dispatch({
    type: Types.SET_USER,
    payload: {
      user: decode
    }
  })
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
