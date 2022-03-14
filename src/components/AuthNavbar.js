import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticatedNav = () => {
  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();
  if (isLoading) {
    return "";
  }
  if (isAuthenticated) {
    return (
      <li className='nav-item'>
        <Link
          to='/AuthOnly'
          className='nav-links'
        >
          AuthOnly
        </Link>
      </li>
    );
  } else { 
    return "";
  }
  
};

export default AuthenticatedNav;