import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TeamListRow from '../teamListRow';
import Loading from '../loading';
import './styles.scss';

const Teams = ({ teams, isLoading }) => (isLoading ? (
  <div className={'container'}>
    <Loading size={100} />
  </div>
) : (
  <Fragment>
    <div className={'title'}>Teams</div>
    <div className={'teams'}>
      {teams.map(row => (
        <TeamListRow key={row.constructorId} {...row} />
      ))}
    </div>
  </Fragment>
));

Teams.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      constructorId: PropTypes.string.isRequired
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Teams;
