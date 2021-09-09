const mongoose = require('mongoose');

const voteSchema = mongoose.Schema({
  team_id: {
    type: String,
    require: true,
  },
  votes: {
    type: Number,
    require: true,
    default: 0,
  },
  voted_teams: {
    type: Array,
    require: true,
    default: [],
  },
});

const Vote = mongoose.model('vote', voteSchema);
module.exports = Vote;
