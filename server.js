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
  Celebrity.find({}, function(err, celebs){
    if(err) throw err
    var longString = "<h1> Celebrities </h1><br>"
    celebs.each(function(celeb){
     longSring += "<a href=celebrity/" + celeb._id + ">" + celeb.name + "</a><br><br><hr>"
    })
    res.send(longString)
  })
})

app.get('/celebrity/:id', function(req, res){
  Celebrity.findOne({_id: req.params.id})
    .populate("memes")
    .exec(function(err, celeb){
      res.json(celeb)
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
  Celebrity.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, celeb){
    if(err) throw err
    res.json({success:true, message: celeb})
  })
})

// Meme Routes
app.post('/celebrity/:id', function(req, res){
  Celebrity.findOne({_id: req.params.id}, function(err, celeb){
    if(err) throw err
    console.log(celeb, celeb.memes, celeb.memes.count)
    //create and save meme
    var meme = new Meme(req.body)
    meme.save()
    //push meme to celebs meme array
    celeb.memes.push(meme)
    celeb.save(function(err, newCeleb){
      if(err) throw err
      res.json(newCeleb)
    })
  })
})



// app.get('/celebrity/:id/memes', function(req,res){
//   Meme.find({_by: req.params.id}, function(err, meme))
// })

// Start Server ::::::::::::::::::
app.listen(3000, function(err){
 if(err) throw err
 console.log("Listening on port 3000...Bitches!")
})
