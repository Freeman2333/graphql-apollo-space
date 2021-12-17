import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';

import { LAUNCH_TILE_DATA } from '../pages/Launches';
import LaunchTile from '../components/LaunchTile';

export const GET_LAUNCH = gql`
  query GetLaunch($launchId: ID!) {
    launch(id: $launchId) {
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`;

const CartItem: FC<any> = ({ launchId }) => {
  const { data, loading, error } = useQuery(GET_LAUNCH, {
    variables: { launchId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;
  return data.launch && <LaunchTile launch={data.launch} />;
};

export default CartItem;
