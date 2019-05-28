import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Images from '../../img/images';
import './styles.scss';

const renderInfo = (title, value) => (
  <Fragment>
    <div className={'driver__info__title'}>{title}</div>
    <div className={'driver__info__value'}>{value}</div>
  </Fragment>
);

const DriverInfo = ({
  position,
  wins,
  points,
  name,
  givenName,
  familyName,
  driverId,
  permanentNumber,
  dateOfBirth,
  nationality
}) => (
  <div className={'driver'}>
    <div className={'driver__image'}>
      <img src={Images.drivers[driverId]} alt={driverId} />
    </div>
    <div className={'driver__section'}>
      <div className={'driver__name'}>{`${givenName} ${familyName}`}</div>
      <div className={'driver__info'}>
        {renderInfo('Team', name)}
        {renderInfo('Number', permanentNumber)}
        {renderInfo('Points', points)}
        {renderInfo('Championship position', position)}
        {renderInfo('Wins', wins)}
        {renderInfo('Nationality', nationality)}
        {renderInfo('Date of birth', dateOfBirth)}
      </div>
    </div>
  </div>
);

DriverInfo.propTypes = {
  position: PropTypes.string.isRequired,
  wins: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
  driverId: PropTypes.string.isRequired,
  permanentNumber: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired
};

export default DriverInfo;
