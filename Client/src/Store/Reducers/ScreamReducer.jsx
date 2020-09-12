import * as Types from '../Types';

const screamsReducer = (state=[], action) => {
  switch(action.type) {
    case Types.USER_SCREAMS: {
      return action.payload.screams
    }
    case Types.LOAD_SCREAMS: {
      return action.payload.screams
    }


    default:
      return state
  }
}

export default screamsReducer;

//Create New Artwork State Todo: