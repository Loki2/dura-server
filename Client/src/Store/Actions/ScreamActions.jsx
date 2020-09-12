import axios from 'axios';
import * as Types from '../Types';

export const loadUserScreams = () => dispatch => {
  axios.get('/screams/myscreams')
        .then( res => {
          dispatch({ 
            type: Types.USER_SCREAMS,
            payload: {
                screams: res.data.data
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
}

export const loadScreams = () => dispatch => {
  axios.get('/screams')
        .then( res => {
          dispatch({ 
            type: Types.LOAD_SCREAMS,
            payload: {
                screams: res.data.data
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
}