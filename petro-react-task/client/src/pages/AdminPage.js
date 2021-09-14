import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TeamCard from '../components/TeamCard';

const AdminPage = () => {
  //hooks
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //side efects
  useEffect(() => {
    axios.get('http://localhost:5000/api/teams').then((response) => {
      const adminTeamId = localStorage.getItem('team');
      const allTeams = response.data.filter(
        (team) => team.teamId !== adminTeamId
      );
      setIsLoading(false);
      setTeams(allTeams);
    });
  }, []);
  //redirects
  const history = useHistory();
  //custom funcs
  const logoutHandler = () => {
    localStorage.removeItem('team');
    history.push('/');
  };

  return (
    <main>
      <h1>Admin page</h1>
      <button onClick={logoutHandler}>Logout</button>

      <section>
        {isLoading ? (
          <p>Loading .... </p>
        ) : (
          teams.map((team) => <TeamCard team={team} key={team.teamId} />)
        )}
      </section>
    </main>
  );
};

export default AdminPage;
