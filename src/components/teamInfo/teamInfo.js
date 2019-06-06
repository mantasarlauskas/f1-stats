import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import './styles.scss';

const renderStats = (title, value) => (
  <Fragment>
    <div className={'team__stats__title'}>{title}</div>
    <div className={'team__stats__value'}>{value}</div>
  </Fragment>
);

const TeamInfo = ({
  constructorId, name, nationality, points, position, wins, drivers
}) => (
  <div className={'team'}>
    <div className={'team__info'}>
      <div className={'team__name'}>{name}</div>
      {drivers.map(({ givenName, familyName, driverId }) => (
        <div key={driverId} className={'team__driver'}>
          <GiFullMotorcycleHelmet />
          <div className={'team__driver__name'}>{`${givenName} ${familyName}`}</div>
        </div>
      ))}
      <div className={'team__stats'}>
        {renderStats('Championship position', position)}
        {renderStats('Points', points)}
        {renderStats('Wins', wins)}
        {renderStats('Nationality', nationality)}
      </div>
    </div>
    <div className={`team__color background-color-${constructorId}`} />
    <div className={'team__image'}>
      <img src={`/src/img/teams_big/${constructorId}.jpg`} alt={name} />
    </div>
  </div>
);

TeamInfo.propTypes = {
  constructorId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  wins: PropTypes.string.isRequired,
  drivers: PropTypes.arrayOf(
    PropTypes.shape({
      givenName: PropTypes.string.isRequired,
      familyName: PropTypes.string.isRequired,
      driverId: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TeamInfo;
