import express from 'express'
import mongoose from 'mongoose'
import route from './Route/route.js';
// const express = require("express");
// const mongoose  = require("mongoose");



const app = express();


  app.use("/users",route)
const PORT = 8080;
const URL = "mongodb://narayan:ashabala@mern-crud-shard-00-00.nmch8.mongodb.net:27017,mern-crud-shard-00-01.nmch8.mongodb.net:27017,mern-crud-shard-00-02.nmch8.mongodb.net:27017/PROJECT 0?ssl=true&replicaSet=atlas-rdl4r9-shard-0&authSource=admin&retryWrites=true&w=majority"



mongoose.connect(URL,{useNewUrlParser: true ,useUnifiedTopology : true , useFindAndModify: false}).then(() => {
    app.listen(PORT, () => console.log(`PORT started at ${PORT}`));
}).catch((error) => {
    console.log(error.message)
})

