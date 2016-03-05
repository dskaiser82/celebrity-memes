var mongoose = require('mongoose')

var celebritySchema = new mongoose.Schema({
  name: {type: String, required: true},
  //let's test this and if it doesn't work we can switch to [memeSchema]
  memes: [{type: mongoose.Schema.Types.ObjectId, ref: "Meme"}]
})

var Celebrity = mongoose.model("Celebrity", celebritySchema)

module.exports = Celebrity



// http://www.vitamin-ha.com/wp-content/uploads/2015/08/Kanye-West-Memes190.jpg
