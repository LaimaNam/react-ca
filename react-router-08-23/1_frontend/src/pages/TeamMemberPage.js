import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TeamMemberPage = () => {
  const { id } = useParams();

  const [teamMember, setTeamMember] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/` + id)
      .then((response) => {
        setTeamMember(response.data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <main>
      {isLoading ? (
        <p>Loadind...</p>
      ) : (
        <>
          <h1>Team member</h1>
          <ul>
            <li>{teamMember.name}</li>
            <li>{teamMember.email}</li>
            <li>
              {teamMember.address.street}, {teamMember.address.city}
            </li>
            <li>{teamMember.phone}</li>
          </ul>
        </>
      )}
    </main>
  );
};

export default TeamMemberPage;
