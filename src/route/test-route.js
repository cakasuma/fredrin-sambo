const test = (app) => {
    app.get('/test', (req, res) => {
        res.send('Testing app get in different file!')
    })
}

module.exports = test