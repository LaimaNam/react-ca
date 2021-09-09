const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Team = mongoose.model('team', teamSchema);
module.exports = Team;
