import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import Header from '../components/Header';
import { RouteComponentProps } from '@reach/router';
import Loading from '../components/Loading';
import LaunchTile from '../components/LaunchTile';

export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
    __typename
    id
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`;

export const GET_LAUNCHES = gql`
  query GetLaunchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

interface LaunchesProps extends RouteComponentProps {}

const Launches: FC<LaunchesProps> = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_LAUNCHES);

  if (loading) return <Loading />;
  if (error || !data) return <p>Error</p>;
  return (
    <>
      <Header />
      {data.launches &&
        data.launches.launches &&
        data.launches.launches.map((launch: any) => (
          <LaunchTile key={launch.id} launch={launch} />
        ))}
    </>
  );
};

export default Launches;
