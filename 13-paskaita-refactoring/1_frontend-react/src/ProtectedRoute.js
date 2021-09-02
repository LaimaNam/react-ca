import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//Screens (pages)
import MyAccountScreen from './screens/MyAccountScreen';

const ProtectedRoute = () => {
  //redirects
  const history = useHistory();

  //--side effects
  useEffect(() => {
    if (!localStorage.getItem('user')) history.push('/login');
    // console.log('ProtectedRoute: useEffect', state.user);
  });

  return <MyAccountScreen />;
};

export default ProtectedRoute;
