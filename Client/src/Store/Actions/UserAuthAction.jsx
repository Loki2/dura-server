import * as Types from '../Types';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import SetAuthToken from '../../Utils/SetAuthToken';



export const signupUser = (userData, history) => (dispatch) => {
  axios.post('/users/register', userData)
        .then((res) => {
          dispatch({
            type: Types.USERS_ERROR,
            payload: {
              error: {}
            }
        })
        console.log(res)
        history.push('/login')
        })
        .catch(error => {
          dispatch({
            type: Types.USERS_ERROR, 
            payload:{
              error: error.response.data
            }
          })
        })
}

export const loginUser = (userData, history) => (dispatch) => {
  axios.post('/users/login', userData)
        .then((res) => {
          let token = res.data.token;
          //Save Token Key to Local Storage
          localStorage.setItem('auth_Token', token)
          //Decode Token Key
          let decode = jwtDecode(token);
          //Set Auth Header
          SetAuthToken(token)
          //Dispatch SET User
          dispatch({
            type: Types.SET_USER,
            payload: {
              user: decode
            }
          })
          history.push('/dashboard')
        })
        .catch(error => {
          dispatch({
            type: Types.USERS_ERROR, 
            payload:{
              error: error.response.data
            }
          })
        })
}

export const logout = (history) => (dispatch) => {
  localStorage.removeItem("auth_Token")
  localStorage.clear()
   console.log('i am from logout')
   return {
     type: Types.SET_USER,
     payload: {
       user:{}
     }
   }
}

// export const recoverypwd = () => (dispatch) => {
//   console.log('i am from recovery pwd')
// }