const express=require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const authRouter = require('./routes/authRoutes')
const corsMiddleware = require('./middleware/corsMiddleware.js')

const app = express()

const { DB_KEY, PORT} = process.env

app.use(corsMiddleware)
app.use(express.json())
app.use(cors())
app.use("/api/auth", authRouter)

const start = () => {
    try {
        mongoose.connect(DB_KEY)

       app.listen(PORT, () => {
           console.log('server start ', PORT)
       }) 
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

start()
