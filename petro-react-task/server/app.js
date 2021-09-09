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

//Routes
app.get('/', (req, res) => res.send('API is running'));

//GET
// - /api/teams | user login (for existing users/teams)

//POST
// - /api/teams | user registration (for new user/teams)
app.post('/api/teams', (req, res) => {
  const registrationData = req.body;
  console.log(registrationData);
  res.end();
});
