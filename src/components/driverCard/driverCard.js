import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const DriverCard = ({
  driverId,
  givenName,
  familyName,
  hideAdditionalMenu,
  team: { constructorId }
}) => (
  <Link
    onClick={hideAdditionalMenu}
    to={`/driver/${driverId}`}
    className={`driver-card border-color-${constructorId}`}
  >
    <span className={`driver-card__team background-color-${constructorId}`} />
    {givenName}
    <span className={'driver-card__lastname'}>{familyName}</span>
  </Link>
);

DriverCard.propTypes = {
  team: PropTypes.shape({
    constructorId: PropTypes.string.isRequired
  }).isRequired,
  hideAdditionalMenu: PropTypes.func.isRequired,
  driverId: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired
};

export default DriverCard;
