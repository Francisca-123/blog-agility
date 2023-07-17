const mongoose = require('mongoose');
const userModel = require('./auth.schema');

const postSchema = new mongoose.Schema({

    author:{
        type:String,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    donated_at:{
        type:Date,
        default:Date.now()
    }
})

const bookModel = mongoose.model('post', postSchema)

module.exports = bookModel