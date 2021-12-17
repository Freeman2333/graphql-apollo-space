import React from 'react';
import styled from 'react-emotion';

import { unit, colors } from '../styles';

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Bar />
      <Container>{children}</Container>
    </>
  );
};

export default PageContainer;

const Bar = styled('div')({
  flexShrink: 0,
  height: 12,
  backgroundColor: colors.primary,
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
  padding: unit * 3,
  paddingBottom: unit * 5,
});
