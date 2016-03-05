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
// http://img.pandawhale.com/77501-Walter-White-this-genius-of-yo-cjvF.jpeg

// Hero
// https://media0.giphy.com/media/aqpxRBwEzzpcs/200_s.gif
// http://images1.tickld.com/live/641179.jpg
// http://cdn.meme.am/instances/500x/65523350.jpg

// Will Smith
// http://www.quickmeme.com/img/d3/d3a67431d4c78b7a2ea3c1a49a632708661b01c50c5dcfd6088fc4427c120307.jpg
// https://s-media-cache-ak0.pinimg.com/236x/b0/f9/cb/b0f9cbb0c3e4b31eaae9361ac95b699f.jpg
// http://www.kappit.com/img/pics/201602_1914_igfbf_sm.jpg
// https://s3.amazonaws.com/hiphopdx-production/2015/11/FPBAM.jpg
// http://i3.kym-cdn.com/photos/images/original/000/162/787/memes-untitled.jpg
