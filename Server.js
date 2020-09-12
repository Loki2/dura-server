// if(process.env.NODE_ENV !== 'production'){
//   require('dotenv').config()
// }

// require("dotenv").config();
const http = require('http');
const app = require('./Server/App')
const PORT = process.env.APP_PORT || 4040;


const server = http.createServer(app);
server.listen(PORT, () => {
  console.log('Server is starting on Port: ' + PORT);
})