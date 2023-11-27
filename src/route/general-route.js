const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to my API!')
})

router.get('/tambah', (req, res) => {
    const firstNumber = req.query.firstNumber;
    const secondNumber = req.query.secondNumber;
    const sum = Number(firstNumber) + Number(secondNumber)
    res.send(sum.toString())
})

module.exports = router