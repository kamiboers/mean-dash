const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://kami:tonsai@ds019946.mlab.com:19946/kamdash', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, function() {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  var cursor = db.collection('tasks').find()
})

app.post('/todo', (req, res) => {
  db.collection('tasks').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('task saved to db')
    res.redirect('/')
  })
})