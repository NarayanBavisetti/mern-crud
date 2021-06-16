import express from "express";
import mongoose from "mongoose";
import route from "./Route/route.js";
import cors from "cors";
import bodyParser from "body-parser";
// const express = require("express");
// const mongoose  = require("mongoose");

const app = express();

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use("/users", route);
const PORT = 8080;
const URL =
"mongodb+srv://narayan:ashabala@mern-crud.nmch8.mongodb.net/PROJECT0?retryWrites=true&w=majority";

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`PORT started at ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
