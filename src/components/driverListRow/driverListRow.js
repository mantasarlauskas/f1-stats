import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { photoUrl } from '../../services/api';
import './styles.scss';

const DriverListRow = ({
  team: { constructorId }, givenName, driverId, familyName
}) => (
  <Link
    to={`/driver/${driverId}`}
    className={`driver-list-row border-color-hover-${constructorId}`}
  >
    <img
      className={'driver-list-row__image'}
      src={`${photoUrl}/drivers/${driverId}.jpg`}
      alt={driverId}
    />
    <div className={`driver-list-row__color background-color-${constructorId}`} />
    {`${givenName} ${familyName}`}
  </Link>
);

DriverListRow.propTypes = {
  team: PropTypes.shape({
    constructorId: PropTypes.string.isRequired
  }).isRequired,
  givenName: PropTypes.string.isRequired,
  driverId: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired
};

export default DriverListRow;
