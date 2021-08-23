import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({ teamMember: { id, name } }) => {
  return (
    <ul>
      <li>{name}</li>
      <li>
        <Link to={`/about/${id}`}>More info</Link>
      </li>
    </ul>
  );
};

export default TeamMember;
