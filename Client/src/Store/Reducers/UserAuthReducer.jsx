import * as Types from '../Types';


//Set User Authentication Reducer
const initialState  = {
  authenticated: false,
  user: {},
  error: {}
}


export default function(state = initialState, action) {
  switch(action.type){
    case Types.SET_USER: {
      return {
        user: action.payload.user,
        authenticated: Object.keys(action.payload.user) !== 0,
        error: {}
      }
    }
    case Types.USERS_ERROR: {
      return {
        ... state,
        error: action.payload.error
      }
    }
    // case Types.SET_AUTHENTICATED:
    //   return {
    //     ...state,
    //     authentiacted: true
    //   }
    // case Types.SET_UNAUTHENTICATED:
    //     return initialState;
    default: 
        return state;
  }
}