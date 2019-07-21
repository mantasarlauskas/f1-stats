import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { photoUrl } from '../../services/api';
import './styles.scss';

const FavouriteDriver = ({
  driver: { driverId, givenName, familyName },
  team: { constructorId, name },
  removeFavouriteDriver
}) => (
  <Link
    to={`/driver/${driverId}`}
    className={`favourite-driver border-color-hover-${constructorId}`}
  >
    <div className={'favourite-driver__name'}>
      {`${givenName} ${familyName}`}
    </div>
    <div className={'favourite-driver__team xs-hide'}>
      {name}
    </div>
    <img className={'m-hide'} src={`${photoUrl}/teams/${constructorId}.png`} alt={name} />
    <button
      className={'favourite-driver__button'}
      type={'button'}
      onClick={(e) => { e.preventDefault(); removeFavouriteDriver(driverId); }}
    >
      Remove
    </button>
  </Link>
);

FavouriteDriver.propTypes = {
  driver: PropTypes.shape({
    driverId: PropTypes.string.isRequired,
    givenName: PropTypes.string.isRequired,
    familyName: PropTypes.string.isRequired
  }).isRequired,
  team: PropTypes.shape({
    constructorId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  removeFavouriteDriver: PropTypes.func.isRequired
};

export default FavouriteDriver;
