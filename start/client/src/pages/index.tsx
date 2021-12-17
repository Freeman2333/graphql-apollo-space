import React from 'react';
import { Router } from '@reach/router';
import PageContainer from '../components/PageContainer';
import Launches from './Launches';
import Footer from '../components/Footer';
import Launch from './Launch';
import Cart from './Cart';
import Profile from './Profile';

const Pages = () => {
  return (
    <>
      <PageContainer>
        <Router primary={false} component={React.Fragment}>
          <Launches path="/" />
          <Launch path="launch/:launchId" />
          <Cart path="cart" />
          <Profile path="profile" />
        </Router>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Pages;
