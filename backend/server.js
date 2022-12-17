const path = require('path')
const { application } = require('express')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5002


connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals', require('./routes/goalsRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

//Serve Frontend by default
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname,'../','frontend','build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please change the ENV to Production'))
}

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on ${port}`))