const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// Middlewares
app.use(cors()); //praleis uzklausas
app.use(express.json()); //gauta info i backa suformatuos i json faila

//Connection to DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to mongoDB');
    // Starting server
    app.listen(process.env.PORT, () =>
      console.log(`Server is running on ${process.env.PORT}...`)
    );
  })
  .catch((err) => console.log(err));

//Models
const Team = require('./models/teamModel.js');
const Vote = require('./models/voteModel.js');

//GET
//Routes
app.get('/', (req, res) => res.send('API is running'));

app.get('/api/teams', async (req, res) => {
  const teams = await Team.find({});
  const votes = await Vote.find({});

  const teamsAndVotesArr = teams.reduce((total, team) => {
    const teamId = team._id;

    const teamWithVotes = { teamId, name: team.name };

    votes.forEach((teamVotes) => {
      if (teamVotes.team_id === '' + teamId) {
        teamWithVotes.votes = teamVotes.votes;
        teamWithVotes.votedTeams = teamVotes.voted_teams;
      }
    });

    total.push(teamWithVotes);

    return total;
  }, []);
  res.json(teamsAndVotesArr);
});

//POST
// - /api/teams/login | user login (for existing users/teams)
app.post('/api/teams/login', async (req, res) => {
  try {
    const loginData = req.body;
    const team = await Team.findOne(loginData);
    if (!team) {
      res.json({ loginStatus: 'failed' });
    } else {
      res.json({ loginStatus: 'success', teamId: team._id });
    }
  } catch (error) {
    console.log(error);
  }
});

// - /api/teams | user registration (for new user/teams)
app.post('/api/teams/signup', async (req, res) => {
  try {
    const signupData = req.body;

    //checking if team exists in db
    const { name, email } = signupData;

    const teamExists = await Team.findOne({ name, email });

    if (!teamExists) {
      //if team doesn't exist, team could sign up
      const team = new Team(signupData);

      const savedTeam = await team.save();

      const teamId = savedTeam._id;

      const vote = new Vote({ team_id: teamId });

      vote
        .save()
        .then(() => res.json({ signupStatus: 'Success', teamId }))
        .catch((err) => console.log(err));
    } else {
      res.json({ signupStatus: 'Failed' });
    }
  } catch (error) {
    console.log(error);
  }
});

//PUT
// /api/teams/votes | updating team votes
app.put('/api/teams/votes', (req, res) => {
  const voteDataAfterUpdate = req.body;

  console.log('voteDataAfterUpdate', voteDataAfterUpdate);

  Vote.findOneAndUpdate(
    { team_id: voteDataAfterUpdate.team_id },
    voteDataAfterUpdate
  )
    .then((result) => res.json({ message: 'Vote saved' }))
    .catch((err) => console.log(err));
});
