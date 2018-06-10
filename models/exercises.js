const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let exerciseSchema = new Schema ({
  exerciseId: String,
  duration: Number,
  sessionType: String,
  title: String,
  description: String,
  guidance: String
});

const Exercise = mongoose.model('Exercise', exerciseSchema);