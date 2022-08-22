const e = require('express')
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))
app.listen(3000, () => {
    console.log("App listening on port 3000")
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
})
app.get('/contact', (req, res) => {
    res.send('Welcome to the world')})

app.get('*' ,(req, res) => {
    res.header(404)
    res.send('Not Found')})