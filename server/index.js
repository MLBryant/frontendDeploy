const express = require('express')
const path = require('path')
const app = express()

app.use('/css', express.static(path.join(__dirname, 'style.css')))
app.use('/js', express.static(path.join(__dirname, 'profile.js')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../home.html'))
})
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, './style.css'))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './profile.js'))
})

const server = process.env.PORT || 4000
app.listen(server, () => console.log(`Server is running on ${server}`))