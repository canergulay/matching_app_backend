const express = require('express')
const app = express()

app.use(express.json());
app.use(express.raw());
app.use(express.text());

module.exports = app