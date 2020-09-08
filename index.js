"use strict"

const PORT = process.env.PORT || 4000
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/build'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(PORT, err => console.log(">>> Server listening on port " + PORT))