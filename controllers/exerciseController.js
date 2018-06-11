const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.Exercise
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbmodel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Exercise
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
};