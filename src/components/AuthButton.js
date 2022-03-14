import React from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();
  console.log(isAuthenticated);
  if (isLoading) {
    return "Loading";
  }
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;