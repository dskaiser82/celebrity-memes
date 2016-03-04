var mongoose = require('mongoose')

var memeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  url: {type: String, unique: true, required: true},
  _by: {type: mongoose.Schema.Types.ObjextId, ref: 'Celebrity'}
})

var Meme = mongoose.model('Meme', memeSchema)

module.exports = Meme
