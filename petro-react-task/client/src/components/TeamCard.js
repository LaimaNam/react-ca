import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamCard = ({ team }) => {
  //hooks
  // state
  const [voted, setVoted] = useState(false);
  const [teamVotes, setTeamVotes] = useState(team.votes);
  //side effects
  useEffect(() => {
    team.votedTeams.forEach((votedTeamId) => {
      if (votedTeamId === localStorage.getItem('team')) {
        setVoted(true);
      }
    });
  }, [teamVotes, team.votedTeams]);

  //custom func
  const addVote = (voteType) => {
    if (voted) {
      return alert('You already voted for this team!');
    } else {
      let teamDataAfterVote = {
        team_id: team.teamId,
        voted_teams: team.votedTeams,
      };

      if (voteType === 'increment') {
        teamDataAfterVote.votes = teamVotes + 1;

        setTeamVotes(teamVotes + 1);
      } else if (voteType === 'decrement') {
        teamDataAfterVote.votes = teamVotes - 1;

        setTeamVotes(teamVotes - 1);
      }

      teamDataAfterVote.voted_teams.push(localStorage.getItem('team'));

      console.log('teamAfterVote', teamDataAfterVote);

      axios
        .put('http://localhost:5000/api/teams/votes', teamDataAfterVote)
        .then((response) => setVoted(true))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h4>
        {team.name} | Votes: {teamVotes}
      </h4>
      <button onClick={() => addVote('decrement')}>-</button>
      <button onClick={() => addVote('increment')}>+</button>
    </div>
  );
};

export default TeamCard;
