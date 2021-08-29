import React, { useContext } from 'react';
import CompA1 from './CompA1';
import { DataContext } from '../../App';

const CompA = () => {
  const dataContext = useContext(DataContext);
  const { dispatch } = dataContext;

  const clickHandler = (type) => {
    console.log('handler called for type:', type);
    dispatch({ type: type });
  };

  return (
    <>
      <h2>Comp A</h2>
      <button onClick={() => clickHandler('POSTS_CLICKED')}>Posts</button>
      <button onClick={() => clickHandler('COMMENTS_CLICKED')}>Comments</button>
      <button onClick={() => clickHandler('TODOS_CLICKED')}>Todos</button>
      <CompA1 />
    </>
  );
};

export default CompA;
