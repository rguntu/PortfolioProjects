const express  = require('express')
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const port = process.env.PORT || 5001
const connectDB = require('./config/db')
const app = express()
const cors  = require('cors')

connectDB()
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: schema,  
    graphiql: true

}))
app.listen(port, console.log(`Server running on ${port}`))