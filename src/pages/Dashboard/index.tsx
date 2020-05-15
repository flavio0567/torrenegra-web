import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

const Dashboard: React.FC = (props) => {
  const { signOut } = useAuth();

  console.log(props);
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/users">Users</Link>
      <Link to="/clients">Clients</Link>

      <Button onClick={signOut}>
        <FiLogOut />
        Sair
      </Button>
    </>
  );
};

export default Dashboard;
