const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/exercises"
);

const exerciseSeed = [
  {
    exerciseId: '5 min meditation',
    duration: 5,
    sessionType: 'meditation',
    title: '5 Minute Meditation',
    description: 'Description of the benefits of a 5 Minute Meditation',
    guidance: 'Find a quiet space. Close your eyes. Take a deep breath through your nose. Breathe out slowing, counting down from 7. Repeat.'
  },
  {
    exerciseId: '10 min stretch',
    duration: 10,
    sessionType: 'stretching',
    title: '10 Minute Quick Stretch',
    description: 'Description of the benefits of a 10 Minute Stretch',
    guidance: 'Stand with feet slightly apart, arms outstretched to the sides. In a sweeping motion, raise arms up, then down as you bend at your hips. Hang in this position for two breaths. Slowly stand up. Slowly breathe in, then out.'
  },
  {
    exerciseId: '15 min walk',
    duration: 15,
    sessionType: 'walk',
    title: '15 Minute Walk',
    description: 'Description of the benefits of a 15 Minute Walk',
    guidance: 'Sometimes you just need a change of scenery and get the blood pumping. Go outside. Take a walk around the block or do a few laps in the parking lot. Focus on your breathing and clearing your mind.'
  }
];

db.Exercise
  .then(() => db.Exercise.collection.insertMany(exerciseSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' exercises inserted');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });