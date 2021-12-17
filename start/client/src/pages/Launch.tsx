import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { LAUNCH_TILE_DATA } from './Launches';
import Loading from '../components/Loading';
import Header from '../components/Header';
import LaunchDetail from '../components/LaunchDetail';
import ActionButton from '../containers/ActionButtons';
import ActionButtons from '../containers/ActionButtons';

export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      site
      rocket {
        type
      }
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`;

interface LaunchProps extends RouteComponentProps {
  launchId?: any;
}

const Launch: FC<LaunchProps> = ({ launchId }) => {
  const { data, loading, error } = useQuery(GET_LAUNCH_DETAILS, {
    variables: { launchId },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;
  return (
    <>
      <Header
        image={
          data.launch && data.launch.mission && data.launch.mission.missionPatch
        }
      >
        {data && data.launch && data.launch.mission && data.launch.mission.name}
      </Header>
      <LaunchDetail {...data.launch} />
      <ActionButtons {...data.launch} />
    </>
  );
};

export default Launch;
