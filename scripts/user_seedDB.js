const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/exercises"
);

const userSeed = [
  {
    dateCompleted: 'Sun Jun 10 2018',
    sessionType: 'meditation',
    duration: 5,
    exerciseId: 'meditation-5min'
  },
  {
    dateCompleted: 'Fri Jun 8 2018',
    sessionType: 'yoga',
    duration: 10,
    exerciseId: 'yoga-10min'
  },
  {
    dateCompleted: 'Tue Jun 5 2018',
    sessionType: 'meditation',
    duration: 5,
    exerciseId: 'meditation-5min'
  },
  {
    dateCompleted: 'Mon Jun 4 2018',
    sessionType: 'yoga',
    duration: 5,
    exerciseId: 'yoga-5min'
  },
  {
    dateCompleted: 'Mon Jun 4 2018',
    sessionType: 'meditation',
    duration: 10,
    exerciseId: 'meditation-10min'
  },
  {
    dateCompleted: 'Fri Jun 1 2018',
    sessionType: 'yoga',
    duration: 15,
    exerciseId: 'yoga-15min'
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' sessions inserted');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });