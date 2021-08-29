import React, { useContext } from 'react';

import { DataContext } from '../../App';

const CompA1a = () => {
  const dataContext = useContext(DataContext);
  const { dispatch } = dataContext;

  const clickHandler = (type) => {
    console.log('handler called for type:', type);
    dispatch({ type: type });
  };

  return (
    <div>
      <h5>Comp A1 a</h5>
      <button onClick={() => clickHandler('POSTS_CLICKED')}>Posts</button>
      <button onClick={() => clickHandler('COMMENTS_CLICKED')}>Comments</button>
      <button onClick={() => clickHandler('TODOS_CLICKED')}>Todos</button>
    </div>
  );
};

export default CompA1a;
