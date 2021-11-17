const express = require('express')
const path = require('path')
const app = express()

app.use('/css', express.static(path.join(__dirname, '/styles.css')))
app.use('/profilejs', express.static(path.join(__dirname, 'profile.js')))
app.use('/homejs', express.static(path.join(__dirname, 'home.js')))
app.use('/hoodjs', express.static(path.join(__dirname, 'myNeighborhood.js')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../home.html'))
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../home.html'))
})
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../profile.html'))
})
app.get('/myNeighborhood', (req, res) => {
    res.sendFile(path.join(__dirname, '../myNeighborhood.html'))
})
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})
app.get('/profilejs', (req, res) => {
    res.sendFile(path.join(__dirname, '../profile.js'))
})
app.get('/hoodjs', (req, res) => {
    res.sendFile(path.join(__dirname, '../myNeighborhood.js'))
})
app.get('/homejs', (req, res) => {
    res.sendFile(path.join(__dirname, '../home.js'))
})

const server = process.env.PORT || 4000
app.listen(server, () => console.log(`Server is running on ${server}`))