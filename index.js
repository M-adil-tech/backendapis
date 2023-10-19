const app = require("./app");

require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const mongoString = '';

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
});



const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`Server Listening on Port ${port}`);
})