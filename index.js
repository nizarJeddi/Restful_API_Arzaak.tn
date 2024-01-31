const express = require("express");
//création d'une instance pour l'application serveur express :
const app = express();


//configuration de package dotenv:

require('./Config/config')
const port=process.env.PORT ;

//


//Ecoute de serveur sur le port :
app.listen(port, () => {
  console.log(`Le serveur vous  écoute sur le port ${port} `);
});
