const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const {env} = process
global.environment = env.NODE_ENV
const port = 8020
require('./config/db').dbConnection()
const Routes = require('./Routes')

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(Routes)

app.listen(port, () => {
    console.log(`app is running ${process.env.NODE_ENV} mode on the port ${port}`)
})