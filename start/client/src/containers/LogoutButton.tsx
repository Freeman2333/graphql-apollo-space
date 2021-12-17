import React from 'react';
import styled from 'react-emotion';
import { useApolloClient } from '@apollo/client';
import { menuItemClassName } from '../components/MenuItems';
import { isLoggedInVar } from '../cache';
import { ReactComponent as ExitIcon } from '../assets/icons/exit.svg';

const LogoutButton = () => {
  const client = useApolloClient();
  return (
    <StyledButton
      data-testid="logout-button"
      onClick={() => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        isLoggedInVar(false);
        // client.cache.gc();
      }}
    >
      <ExitIcon />
      Logout
    </StyledButton>
  );
};

export default LogoutButton;

const StyledButton = styled('button')(menuItemClassName, {
  background: 'none',
  border: 'none',
  padding: 0,
});
