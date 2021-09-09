import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//pages
import AdminPage from './pages/AdminPage';

const ProtectedRoutes = () => {
  //Hooks
  //-- side effects

  //redirects
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('team')) history.push('/');
  }, [history]);

  return <AdminPage />;
};

export default ProtectedRoutes;
