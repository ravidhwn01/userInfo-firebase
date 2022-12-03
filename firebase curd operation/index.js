 "use strick"
 const express = require("express")
 const cors = require("cors")
 const bodyParser = require("body-parser")
 const config = require("./config")
 const app  = express();
 app.use(express.json())
 app.use(cors())
 app.use(bodyParser.json())


 app.listen(config.port,()=>{
    console.log(`App is running at port http://localhost${config.port}`)
 })