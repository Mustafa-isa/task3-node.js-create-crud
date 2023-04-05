const express= require("express")
const MY_DATA_base =  require("./config/dataBase.js")
const Router = require("./routs/Router")
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(Router)
app.listen(3001,() =>{
  console.log("server start")
})