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

const usersDB = new Map()

app.use('/api/posts', posts)

app.use((req,res, next) => {
    const error = new Error("wrong route")
    error.status = 500
    next(error)

})
app.use(errorHandler)
app.get('/users', (req, res) => {
    console.log("usersDB.values()", Array.from(usersDB.values()))
    const users = Array.from(usersDB.values());

    res.json(users);
})
app.post('/users', (req,res) => {
    const {name, email} = req.body
    const user = {id: Date.now(), name, email}
    usersDB.set(email, user)
    console.log("usersDB.values()", Array.from(usersDB.values()))
    res.status(201).json(user)
})

app.get('/', (req,res) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log(`server is running: ${port}`)
})