var mongoose = require('mongoose')

var celebritySchema = new mongoose.Schema({
  name: {type: String, required: true},
  memes: [{type: mongoose.Schema.Types.ObjectId, ref: "Meme"}]
})

var Celebrity = mongoose.model("Celebrity", celebritySchema)

module.exports = Celebrity
