const { response } = require('express')
const express = require('express')

const app = express()

app.listen(3000, () => {
    console.log("App listen in port 3000")
})

app.get("/info", (req, res) => {
    res.json({
        name: "Nguyen Van Phong",
        website : "phongnguyen.com"

    })
})

app.get('/about', (req, res) => {
    res.send("the about page has been created")
})

//máy chủ node.js sẽ trả về cho client tệp about.html chi client request tới URL: "/about"
app.get('/html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'test.html'))
})

app.get('/index', (req, res) => {
    res.send("the index page has been created")
})