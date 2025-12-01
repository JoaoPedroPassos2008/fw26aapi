const express = require('express');
const app = express();
const port = 3000;

// Define your routes

app.set("view engine","ejs")
app.set("views","./views")

  app.use(express.json());
  app.use(express.urlencoded());

  require('../db/dbconnect')(app);
  require('../route/home')(app);
  require('../route/getnoticias')(app);
  require('../route/getidnoticias')(app);
  require('../route/gettiponoticias')(app);
  require('../route/delnoticias')(app);
  require('../route/postnoticias')(app);
  require('../route/putnoticias')(app);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  