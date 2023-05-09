require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/routes');
const mongoString = process.env.DATABASE_URL;

// Conncetion process of database
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error',(error)=>{
    throw error;
})
database.once("connected",()=>{
    console.log("Database connected");
})

// Middle ware
const app = express();
app.use(express.json());
app.use('/api',routes);



// Port number of the node server
app.listen(3000,()=>{
    console.log(`Server started at ${3000}`);
})