import React from 'react';
import PropTypes from 'prop-types';
import TeamInfo from '../teamInfo';
import Loading from '../loading';

const Team = ({
  team, teamStandings, isLoading, drivers
}) => (
  <div className={'container'}>
    {isLoading ? (
      <Loading size={100} />
    ) : team ? (
      <TeamInfo {...team} {...teamStandings} drivers={drivers} />
    ) : (
      <div className={'empty'}>Team does not exist</div>
    )}
  </div>
);

Team.propTypes = {
  team: PropTypes.object,
  teamStandings: PropTypes.object,
  drivers: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired
};

Team.defaultProps = {
  team: null,
  teamStandings: null,
  drivers: []
};

export default Team;
