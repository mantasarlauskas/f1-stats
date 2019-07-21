import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { photoUrl } from '../../services/api';
import './styles.scss';

const FavouriteTeam = ({
  team: { constructorId, name },
  removeFavouriteTeam
}) => (
  <Link
    to={`/team/${constructorId}`}
    className={`favourite-team border-color-hover-${constructorId}`}
  >
    <div className={'favourite-team__name'}>
      {name}
    </div>
    <img className={'xs-hide'} src={`${photoUrl}/teams/${constructorId}.png`} alt={name} />
    <button
      type={'button'}
      className={'favourite-team__button'}
      onClick={(e) => { e.preventDefault(); removeFavouriteTeam(constructorId); }}
    >
      Remove
    </button>
  </Link>
);

FavouriteTeam.propTypes = {
  team: PropTypes.shape({
    constructorId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  removeFavouriteTeam: PropTypes.func.isRequired
};

export default FavouriteTeam;
