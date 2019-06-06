import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const StandingsRow = ({
  driver, team: { name }, isDriver, points, position, constructorId
}) => (
  <div className={isDriver ? 'standings-row' : 'standings-row standings-row--short'}>
    <div className={'standings-row__number-wrapper'}>
      <span className={'standings-row__number'}>{position}</span>
      <span className={`standings-row__number-color background-color-${constructorId}`} />
    </div>
    {isDriver && (
      <div className={'standings-row__name'}>
        {driver.givenName}
        <span className={'standings-row__name--bold'}>{driver.familyName}</span>
      </div>
    )}
    <div className={isDriver ? 'xs-hide standings-row__driver-team' : 'standings-row__name--bold'}>
      {name}
    </div>
    <img className={'m-hide'} src={`/src/img/teams/${constructorId}.png`} alt={name} />
    <div className={'standings-row__points'}>{points}</div>
  </div>
);

StandingsRow.propTypes = {
  driver: PropTypes.shape({
    givenName: PropTypes.string.isRequired,
    familyName: PropTypes.string.isRequired
  }),
  team: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  isDriver: PropTypes.bool.isRequired,
  points: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  constructorId: PropTypes.string.isRequired
};

StandingsRow.defaultProps = {
  driver: null
};

export default StandingsRow;
