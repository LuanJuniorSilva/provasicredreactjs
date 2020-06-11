import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';

// import { Container } from './styles';

function Dashboard() {
  const dispatch = useDispatch();

  function habdleSignOut() {
    dispatch(signOut());
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={habdleSignOut}>SAIR</button>
    </div>
  );
}

export default Dashboard;
