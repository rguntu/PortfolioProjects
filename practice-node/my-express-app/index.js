import express from 'express'
import path from 'path'
import logger from './logger.js'
import errorHandler from './error.js'
const app = express()
import posts from './routes/posts.js'
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logger)

app.use((req,res, next) => {
    const error = new Error("wrong route")
    error.status = 500
    next(error)

})



app.get('/', (req,res) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log(`server is running: ${port}`)
})