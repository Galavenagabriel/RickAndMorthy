const express = require('express');
const {router} = require("./routes")
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());

server.use("/rickandmorty", router)

