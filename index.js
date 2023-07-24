const express = require("express");
const server = express();

const {sequelize} = require("./Models/index.js")

sequelize.sync({force:true}).then(()=>console.log("SINCRONIZACION CORRECTA")).catch((err)=>{
    console.log(err.message, "ERROR");
})