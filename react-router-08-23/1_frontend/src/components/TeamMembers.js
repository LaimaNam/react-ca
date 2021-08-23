import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import TeamMember from './TeamMember';

const Users = () => {
  //Hooks
  //state
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //side effects
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setTeamMembers(response.data);
      setIsLoading(false);
    });

    const button = buttonRef.current;

    return () => {
      button.removeEventListener('click', handleClick);
      console.log('TeamMembers removed from Ui');
    };
  }, []);

  // refs
  const buttonRef = useRef();

  //custom functions
  const handleClick = () => {
    console.log('Hello World');
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        teamMembers.map((teamMember) => (
          <TeamMember key={teamMember.id} teamMember={teamMember} />
        ))
      )}
      <button ref={buttonRef} onClick={handleClick}>
        Greeting
      </button>
    </div>
  );
};

export default Users;
