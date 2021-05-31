const express = require('express')
const routes = express.Router()
const test = require('./object')

routes.get('/', (req, res) =>{
    res.render('index', {test})
})

routes.use((req, res) =>{
    res.status(404).render('error')
})


module.exports = routes
