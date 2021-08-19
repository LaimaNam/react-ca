import React from 'react'; //if using react v.17 or higher and func comp, this import is unnecessary
import FuncButton from '../components/FuncButton';
import ClassButton from '../components/ClassButton';

//componantai buna funkciniai arba klasiu

const HomeScreen = () => {
  return (
    <>
      <h1>Home page</h1>
      <FuncButton usernmae="Laima" />
      <FuncButton usernmae="Laurynas" />
      <FuncButton usernmae="Ernestas" />
      <ClassButton />
    </>
  );
};

export default HomeScreen;
