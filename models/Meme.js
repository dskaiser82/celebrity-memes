var mongoose = require('mongoose')

var memeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  url: {type: String, unique: true, required: true},
  _by: {type: mongoose.Schema.Types.ObjectId, ref: 'Celebrity'}
})

var Meme = mongoose.model('Meme', memeSchema)

module.exports = Meme

// Walter White
// http://www.quickmeme.com/img/9f/9f0b18b98a96c8014112fe4ab1326ec73008e2f189dfef1da51e350cd4f1514a.jpg
// https://media.makeameme.org/created/WALTER-WHITE-APPROVES.jpg
// http://weknowmemes.com/wp-content/uploads/2013/09/the-many-faces-of-heisenberg-1-240x180.jpg
