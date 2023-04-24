import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import mongoose from 'mongoose';
import resultRoutes from './routes/results.js'
import cors from "cors";

//express app
const app = express()

//middleware
app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/results', resultRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen port for requests
        app.listen(process.env.PORT, () => {
            console.log("Server On")
        })
    })
    .catch((error) => {
        console.log(error)
    })
