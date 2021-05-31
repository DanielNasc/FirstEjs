const express = require('express');
const app = express();
const rotas = require('./routes')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(rotas)

app.listen(80);