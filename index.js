const express = require("express");

const app = express();
//to parse the json data
app.use(express.json());
//api nomeclature done for the api routes
app.use("/api/v1", require("./routes/route"));
//requiring the mongoose connection written in the db.js to connect to mongodb
require("./db/db");
//process.env.PORT helps to connect to different port in case 3000 is occupied
app.listen(process.env.PORT || 3000, () =>
  console.log("Server is up and running")
);
