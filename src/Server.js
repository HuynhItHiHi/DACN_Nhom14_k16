const express= require('express')
require('dotenv').config()
const configViewEngine= require('./config/viewEngine')
const webRoutes = require('./routes/web')
const sequelizeConnection =require('./config/databaseSequelize')
// const mysql = require('mysql2')

const app= express()
let port = process.env.PORT||6969;

//config req.body
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true }))

//test connection
sequelizeConnection();


//router
configViewEngine(app);
app.use('/',webRoutes);


//if port === undefine => port 6969
app.listen(port,()=>{
    //callback
    console.log("Backend Nodejs is running on the port: "+ port)
})