// if(process.env.NODE_ENV !== 'production'){
//   require('dotenv').config()
// }

// require("dotenv").config();
const http = require('http');
const app = require('./Server/App')
const PORT = process.env.APP_PORT || 4040;



//Config Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

if (process.env.NODE_ENV === "production") {
  const privateKey = fs.readFileSync('/etc/letsencrypt/live/swizce.com/privkey.pem', 'utf8');
  const certificate = fs.readFileSync('/etc/letsencrypt/live/swizce.com/cert.pem', 'utf8');
  const ca = fs.readFileSync('/etc/letsencrypt/live/swizce.com/chain.pem', 'utf8');
  const credentials = {
      key: privateKey,
      cert: certificate,
      ca: ca
  };

  https.createServer(credentials, app).listen(443, () => {
      console.log('HTTPS Server running on port 443');
  });
  http.createServer(function (req, res) {
      res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
      res.end();
  }).listen(80);
} else if (process.env.NODE_ENV === "development") {
  app.listen(PORT);
} else {
  app.listen(PORT);
}

// const server = http.createServer(app);
// server.listen(PORT, () => {
//   console.log('Server is starting on Port: ' + PORT);
// })