const express = require('express')
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')



const app = express()

app.use(cors())
app.use(express.json())

mongoose.set('strict', true)
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY")
}).catch(error => console.log(`ERROR: ${error.message}`))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`SERVER CONNECTED at PORT ${PORT}`))


