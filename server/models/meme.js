const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memeSchema = new Schema({
    imgSrc: {
        type: String,
        required: true
    },
    initialUrl: {
        type: String,
        required: true
    },
    _api_id: {
        type: String,
        required: true
    },
    alias: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Meme", memeSchema)