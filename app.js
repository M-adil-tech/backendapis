const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./Routes/user.routes");
const courseRoute = require("./Routes/course.register");

const cors = require('cors');

const app = express();

app.use(bodyParser.json());
const corsOptions = { 
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 200, 
  };
  app.use(cors(corsOptions));
  app.use(express.json());


app.use("/api",UserRoute);
app.use("/api",courseRoute);

module.exports = app;