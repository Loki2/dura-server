import axios from 'axios';
const SetAuthToken = token => {
  if(token) {
      axios.defaults.headers.common['Authorization'] = token
  } else {
    axios.defaults.headers.common['Authorization'] = ''
  }
}

export default SetAuthToken;