const mongoose = require("mongoose");

const {Schema} = mongoose;

const Marker = new Schema(
  {
    note: { type: String },
    lat: { type: Number },
    lng: { type: Number }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", Marker);
