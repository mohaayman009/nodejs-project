const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tags: [String],
    imageUrl: String,
    comments:[{
         type: mongoose.Schema.Types.ObjectId, ref: 'Comment'        
      }]
})

module.exports = mongoose.model('Post', postSchema);