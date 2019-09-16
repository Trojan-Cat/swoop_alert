const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Marker = new Schema(
    {
        lat: { type: Number },
        lng: { type: Number },
    },
    { timestamps: true }
)

module.exports = mongoose.model('users', Marker)