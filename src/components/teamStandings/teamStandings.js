import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TeamRow from '../teamRow';
import Loading from '../loading';

const TeamStandings = ({ teamStandings, isLoading }) => (isLoading ? (
  <div className={'container'}>
    <Loading size={100} />
  </div>
) : (
  <Fragment>
    <div className={'title'}>2019 teams championship</div>
    <div className={'standings'}>
      {teamStandings.map(team => (
        <TeamRow key={team.constructorId} {...team} />
      ))}
    </div>
  </Fragment>
));

TeamStandings.propTypes = {
  teamStandings: PropTypes.arrayOf(
    PropTypes.shape({
      constructorId: PropTypes.string.isRequired
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default TeamStandings;
