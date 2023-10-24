const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./Routes/user.routes");
const courseRoutes = require("./Routes/courseregistration.routes");

const cors = require('cors');

const app = express();

app.use(bodyParser.json());
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 204, 
  };
  app.use(cors(corsOptions));
  app.use(express.json());

app.use(express.json());
app.use("/api",UserRoute);
app.use('/api', courseRoutes);
module.exports = app;