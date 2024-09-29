const express= require('express')
require('dotenv').config()
const configViewEngine= require('./config/viewEngine')
const webRoutes = require('./routes/web')


const app= express()
let port = process.env.PORT||6969;


configViewEngine(app);
app.use('/',webRoutes);

 
//if port === undefine => port 6969
app.listen(port,()=>{
    //callback
    console.log("Backend Nodejs is running on the port: "+ port)
})