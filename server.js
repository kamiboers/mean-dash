const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

var db

MongoClient.connect('mongodb://kami:tonsai@ds019946.mlab.com:19946/kamdash', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, function() {
    console.log('listening on 3000')
  })
})

app.get('/', (req, res) => {
  db.collection('tasks').find().toArray(function(err, result) {
    if (err) return console.log(err)
    res.render('index.ejs', {tasks: result})
  })
})

app.post('/todo', (req, res) => {
  db.collection('tasks').save(req.body, (err, result) => {
    if (err) return console.log(err)
    res.redirect('/')
  })
})

app.put('/todo', (req, res) => {
  db.collection('tasks')
  .findOneAndUpdate({id: req.body.id}, {
    $set: {
      task: req.body.task
    }
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})