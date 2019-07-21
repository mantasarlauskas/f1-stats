import React from 'react';
import PropTypes from 'prop-types';
import TeamInfo from '../teamInfo';
import Loading from '../loading';

const Team = ({
  team, teamStandings, isLoading, drivers, id
}) => (
  <div className={'container'}>
    {isLoading ? (
      <Loading size={100} />
    ) : team ? (
      <TeamInfo {...team} {...teamStandings} drivers={drivers} id={id} />
    ) : (
      <div className={'empty'}>Team does not exist</div>
    )}
  </div>
);

Team.propTypes = {
  team: PropTypes.object,
  teamStandings: PropTypes.object,
  drivers: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

Team.defaultProps = {
  team: null,
  teamStandings: null,
  drivers: []
};

export default Team;
