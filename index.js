const express = require("express");
const dotenv = require("dotenv")
dotenv.config();
const mongoose = require('mongoose');
const app = express();
const port = 4040;

mongoose.connect(process.env.MONGOURI , {useNewUrlParser:true , useUnifiedTopology:true, useCreateIndex: true} ,()=>{
    console.log('mongo db connected')
})


app.use(express.json())
app.listen(port , ()=>{
    console.log(`app running on ${port}`)
})
