const express = require('express')
const app = express()

const generalRoute = require('./src/route/general-route')
const authenticationRoute = require('./src/route/authentication-route')
const testRoute = require('./src/route/test-route')

app.use('/', generalRoute)
app.use('/auth', authenticationRoute)

// cara manual routing in different file, this is why express is un-opinionated
testRoute(app)

const port = 3001

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})