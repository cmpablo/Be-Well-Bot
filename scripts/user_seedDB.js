const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/exercises"
);

const userSeed = [
  {
    dateCompleted: new Date(Date.now()),
    sessionType: 5,
    duration: 'meditation',
    exerciseId: '5 Minute Meditation'
  },
  
];

db.User
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' sessions inserted');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });