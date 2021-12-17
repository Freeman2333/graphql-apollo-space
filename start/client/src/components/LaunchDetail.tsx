import React from 'react';
import styled from 'react-emotion';

import { unit } from '../styles';
import { cardClassName, getBackgroundImage } from './LaunchTile';

const LaunchDetail = ({ id, site, rocket }: any) => {
  return (
    <Card
      style={{
        backgroundImage: getBackgroundImage(id as string),
      }}
    >
      <h3>
        {rocket && rocket.name} ({rocket && rocket.type})
      </h3>
      <h5>{site}</h5>
    </Card>
  );
};

const Card = styled('div')(cardClassName, {
  height: 365,
  marginBottom: unit * 4,
});

export default LaunchDetail;
