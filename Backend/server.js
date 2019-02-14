require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(bodyParser.json())


const configureRoutes = require("./routes")
configureRoutes(server);



server.listen(process.env.PORT || 6001, 
    () => {console.log(`listening on port ${process.env.PORT}`)})