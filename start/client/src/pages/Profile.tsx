import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';
import { LAUNCH_TILE_DATA } from './Launches';
import Loading from '../components/Loading';
import Header from '../components/Header';
import LaunchTile from '../components/LaunchTile';

interface ProfileProps extends RouteComponentProps {}

export const GET_MY_TRIPS = gql`
  query GetMyTrips {
    me {
      id
      email
      trips {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

const Profile: FC<ProfileProps> = () => {
  const { data, loading, error } = useQuery(GET_MY_TRIPS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (data === undefined) return <p>ERROR</p>;

  return (
    <>
      <Header>My Trips</Header>
      {data.me && data.me.trips.length ? (
        data.me.trips.map((launch: any) => (
          <LaunchTile key={launch.id} launch={launch} />
        ))
      ) : (
        <p>You haven't booked any trips</p>
      )}
    </>
  );
};

export default Profile;
