import React, { useContext } from 'react';
import CompB1a from './CompB1a';
import { DataContext } from '../../App';

const CompB1 = () => {
  const dataContext = useContext(DataContext);
  const { dispatch } = dataContext;

  const clickHandler = (type) => {
    console.log('handler called for type:', type);
    dispatch({ type: type });
  };

  return (
    <>
      <h3>Comp B1</h3>
      <button onClick={() => clickHandler('POSTS_CLICKED')}>Posts</button>
      <button onClick={() => clickHandler('COMMENTS_CLICKED')}>Comments</button>
      <button onClick={() => clickHandler('TODOS_CLICKED')}>Todos</button>
      <CompB1a />
    </>
  );
};

export default CompB1;
