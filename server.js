var bodyParser = require('body-parser')
var express = require('express')
var mongoose = require('mongoose')

// Initiate Express ::::::::::::::::::
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Connect to Data Base
var dbURL = 'mongodb://localhost/celebrity_memes'
mongoose.connect(dbURL, function(err){
  if(err) throw err
  console.log('Connected to mongo db: ' + dbURL)
})

// Models and Schemas ::::::::::::::::
var Celebrity = require('./models/Celebrity.js')
var Meme = require('./models/Meme.js')

// Root Route
app.get('/', function(req, res){
  res.send("<h1> Welcome To Celebrity Memes! </h1>")
})

// Celebrity Routes
app.get('/celebrity', function(req, res){
  Celebrity.find({}, function(err, celeb){
    if(err) throw err
    res.json({success: true, message: celeb})
  })
})

app.get('/celebrity/:id', function(req, res){
  Celebrity.findOne({_id: req.params.id}, function(err, celeb){
    if(err) throw err
    res.json({success:true, message: celeb})
  })
})

app.post('/celebrity', function(req, res){
  Celebrity.create(req.body, function(err, celeb){
    if(err) throw err
    res.json({success: true, message: celeb + " was created"})

  })
})

app.delete('/celebrity/:id', function(req, res){
  Celebrity.findOneAndRemove({_id: req.params.id}, function(err, celeb){
    if(err) throw err
    res.json({success:true, message: celeb + " was deleted"})
  })
})

app.patch('/celebrity/:id', function(req, res){
  Celebrity.findOneAndUpdate({_id: req.params.id}, function(err, celeb){
    if(err) throw err
    res.json({success:true, message: req.params.id + " was changed to " + newCeleb})
  })
})

// Meme Routes


// Start Server ::::::::::::::::::
app.listen(3000, function(err){
 if(err) throw err
 console.log("Listening on port 3000...Bitches!")
})
